import { useEffect } from "react";
import useSocket from "./useSocket";
import useConversation from "../store/useConversation";

const useListenMessages = () => {
  // socket hook
  const { socket } = useSocket();
  // zustand store
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    // listen to newMessages event
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    // in cleanup, remove socket listeners for newMessages
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
