const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

// userSocketMap has userId as key and socketId as value {userId: socketId}
const userSocketMap = {}; // for getting online users

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  // get userId from socket client handshake query
  const userId = socket.handshake.query.userId;

  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }

  // io.emit is used to send events to all the connected clients.
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on is used to listen to events.
  socket.on("disconnect", () => {
    console.log("a user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

module.exports = {
  app,
  io,
  server,
};
