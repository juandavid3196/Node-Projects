const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const chatRoutes = require("./routes/chat");
const connectDB = require("./config/db");

// Crear la aplicación
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Configurar el servidor HTTP
const server = http.createServer(app);

// Configurar WebSocket
const wss = new WebSocket.Server({ server });

// Conexión a MongoDB

connectDB();

// Manejo de WebSocket
wss.on("connection", (ws) => {
  console.log("Cliente conectado");

  ws.on("message", async (data) => {
    const { roomId, user, message } = JSON.parse(data);

    // Guardar mensaje en la base de datos
    const Message = require("./models/Message");
    const newMessage = new Message({ roomId, user, message });
    await newMessage.save();

    // Enviar mensaje a todos los clientes conectados
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

// Rutas
app.use("/api/chat", chatRoutes);

// Iniciar servidor
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
