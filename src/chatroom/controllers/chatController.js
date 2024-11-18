const ChatRoom = require("../models/ChatRoom");
const Message = require("../models/Message");

// Obtener todas las salas de chat
const getChatRooms = async (req, res) => {
  try {
    const rooms = await ChatRoom.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las salas", error });
  }
};

// Crear una nueva sala de chat
const createChatRoom = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "El nombre es obligatorio" });
    }

    const newRoom = new ChatRoom({ name });
    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la sala", error });
  }
};

// Obtener mensajes por sala
const getMessagesByRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    const messages = await Message.find({ roomId }).sort({ sentAt: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los mensajes", error });
  }
};

module.exports = { getChatRooms, createChatRoom, getMessagesByRoom };
