import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  // send message hook
  const { loading, sendMessage } = useSendMessage();

  const handleSendMessage = async (e) => {
    e.preventDefault();

    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSendMessage}>
      <div className="flex gap-3 w-full">
        <input
          type="text"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border text-md rounded-md block w-[94%] bg-gray-700 border-gray-600 text-white p-2"
        />

        <button
          type="submit"
          className="btn btn-square bg-sky-600 text-white w-[6%]"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend className="w-6 h-6 outline-none" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
