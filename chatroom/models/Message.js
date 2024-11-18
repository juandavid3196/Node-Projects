const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ChatRoom",
    required: true,
  },
  user: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  sentAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", messageSchema);
