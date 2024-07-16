import { useEffect, useRef } from "react";
import Message from "./Message";
import useFetchMessages from "../hooks/useFetchMessages";

const MessageList = () => {
  // fetch messages hook
  const { loading, messages } = useFetchMessages();

  const lastMessageRef = useRef();

  // scroll view to last message
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && <span className="loading loading-spinner text-center"></span>}

      {!loading && messages?.length === 0 && (
        <p className="text-center">Send a message to start a conversation.</p>
      )}

      {!loading &&
        messages?.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default MessageList;
