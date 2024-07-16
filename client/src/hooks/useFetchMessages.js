import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import useConversation from "../store/useConversation";

const useFetchMessages = () => {
  const [loading, setLoading] = useState(false);

  // zustand store
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);

      try {
        // hit get messages api endpoint
        const response = await axios.get(
          `http://localhost:8000/message/${selectedConversation._id}`,
          { withCredentials: true }
        );

        console.log(response.data);

        // if error
        if (response.data.error) {
          throw new Error(response.data.error);
        }

        // set messages in zustand store
        setMessages(response.data.messages);
      } catch (err) {
        toast.error(err.response.data.error);
        console.log(err.response.data.error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      fetchMessages();
    }
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useFetchMessages;
