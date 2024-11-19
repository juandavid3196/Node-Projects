const express = require("express");
const {
  getChatRooms,
  createChatRoom,
  getMessagesByRoom,
} = require("../controllers/chatController");

const router = express.Router();

router.get("/rooms", getChatRooms);
router.post("/rooms", createChatRoom);
router.get("/rooms/:roomId/messages", getMessagesByRoom);

module.exports = router;
