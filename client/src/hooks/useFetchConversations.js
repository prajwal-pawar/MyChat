import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const useFetchConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      setLoading(true);

      try {
        const response = await axios.get("http://localhost:8000/user/all", {
          withCredentials: true,
        });

        console.log(response.data);

        // if error
        if (response.data.error) {
          throw new Error(response.data.error);
        }

        // set conversations state
        setConversations(response.data);
      } catch (err) {
        toast.error(err.response.data.error);
        console.log(err.response.data.error);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  return { loading, conversations };
};

export default useFetchConversations;
