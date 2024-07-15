import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signUp = async (inputs) => {
    const { fullName, username, password, confirmPassword, gender } = inputs;
    setLoading(true);

    try {
      // if input fields are empty
      if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("please fill in all fields");
        return;
      }

      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return;
      }

      // hit signup api endpoint
      const response = await axios.post("http://localhost:8000/auth/signup", {
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      });

      console.log(response.data);

      toast.success(response.data.message);

      // redirect to the login
      navigate("/login");

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

  return { loading, signUp };
};

export default useSignUp;
