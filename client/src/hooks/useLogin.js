import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import useAuth from "./useAuth";

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuth();

  const login = async (username, password) => {
    setLoading(true);

    try {
      // if input fields are empty
      if (!username || !password) {
        toast.error("please fill in all fields");
        return;
      }

      // hit login api endpoint
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        {
          username,
          password,
        },
        { withCredentials: true } // send cookies
      );

      console.log(response.data);

      // if error
      if (response.data.error) {
        throw new Error(response.data.error);
      }

      // save user to local storage
      localStorage.setItem("user", JSON.stringify(response.data));
      // set user in context
      setAuthUser(response.data);
    } catch (err) {
      toast.error(err.response.data.error);
      console.log(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
