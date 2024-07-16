const { getReceiverSocketId, io } = require("../configs/socket");
const Conversation = require("../models/conversation");
const Message = require("../models/message");

module.exports.sendMessage = async (req, res) => {
  try {
    // destructure req.body
    const { message } = req.body;
    const receiverId = req.params.id;
    const senderId = req.user._id;

    // if conversation between sender and receiver exists
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // if conversation between sender and receiver doesn't exists
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    let newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      // put message id into conversations message array
      conversation.messages.push(newMessage._id);
    }

    // this runs synchronously
    // await conversation.save();
    // await newMessage.save();

    // this will run asynchronously
    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      // io.to(socket_id).emit() used to send events to specific client, not all users
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    return res.status(201).json({ newMessage });
  } catch (err) {
    console.error("Error in sending message", err);
    return res.status(500).json({ error: "Message not sent" });
  }
};

module.exports.getMessages = async (req, res) => {
  try {
    const userToChatId = req.params.id;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // populate messages in conversation from their id

    if (!conversation) {
      return res.status(200).json([]);
    }

    return res.status(200).json({
      messages: conversation.messages,
    });
  } catch (err) {
    console.error("Error in fetching messages", err);
    return res.status(500).json({ error: "Error fetching messages" });
  }
};
