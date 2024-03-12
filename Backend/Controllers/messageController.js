import Conversation from "../models/conversationModel.js";
import Messages from "../models/messageModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user.id;
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Messages({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    //saving in database
    Promise.all([conversation.save(), newMessage.save()]);

    // socket io
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      //to send event to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Something Went wrong ❌" });
  }
};
export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");
    if (!conversation) return res.status(200).json({});
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
