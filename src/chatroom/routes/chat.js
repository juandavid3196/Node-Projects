const express = require("express");
const {
  getChatRooms,
  createChatRoom,
  getMessagesByRoom,
} = require("../controllers/chatController");

const router = express.Router();

// Rutas para salas de chat
router.get("/rooms", getChatRooms);
router.post("/rooms", createChatRoom);

// Rutas para mensajes
router.get("/rooms/:roomId/messages", getMessagesByRoom);

module.exports = router;
