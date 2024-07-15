import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import useAuth from "./useAuth";

const useLogout = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuth();

  const logout = async () => {
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/auth/logout");

      // remove user from local storage
      localStorage.removeItem("user");
      // remove user from context
      setAuthUser(null);

      toast.success(response.data.message);

      // if error
      if (response.data.error) {
        throw new Error(response.data.error);
      }
    } catch (err) {
      toast.error(err.response.data.error);
      console.log(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
