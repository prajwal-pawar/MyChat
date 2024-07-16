import { useState, useEffect } from "react";
import io from "socket.io-client";
import SocketContext from "../context/SocketContext";
import useAuth from "../hooks/useAuth";

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:8000", {
        query: {
          userId: authUser._id, // send userId to socket server
        },
      });

      setSocket(socket);

      // set online users
      // socket.on is used to listen to events.
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      // cleanup
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
