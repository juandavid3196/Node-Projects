const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const chatRoutes = require("./routes/chat");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());

// HTTP server
const server = http.createServer(app);

// WebSocket
const wss = new WebSocket.Server({ server });

// Mongodb connection

connectDB();

wss.on("connection", (ws) => {
  console.log("Cliente conectado");

  ws.on("message", async (data) => {
    const { roomId, user, message } = JSON.parse(data);

    const Message = require("./models/Message");
    const newMessage = new Message({ roomId, user, message });
    await newMessage.save();

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ roomId, user, message }));
      }
    });
  });

  ws.on("close", () => {
    console.log("Cliente desconectado");
  });
});

app.use("/api/chat", chatRoutes);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
