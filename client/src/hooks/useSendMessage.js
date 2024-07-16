import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import useConversation from "../store/useConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);

  // zustand store
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);

    try {
      if (!message) {
        return;
      }

      // hit send message api endpoint
      const response = await axios.post(
        `http://localhost:8000/message/send/${selectedConversation._id}`,
        { message },
        { withCredentials: true }
      );

      console.log(response.data);

      // if error
      if (response.data.error) {
        throw new Error(response.data.error);
      }

      setMessages([...messages, response.data.newMessage]);
    } catch (err) {
      toast.error(err.response.data.error);
      console.log(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
