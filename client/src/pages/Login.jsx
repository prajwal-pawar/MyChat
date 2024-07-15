import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // login hook
  const { loading, login } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-1/2 p-6 rounded-lg bg-gray-700">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-500"> MyChat</span>
        </h1>

        <form onSubmit={handleLogin}>
          <div className="mt-2">
            <label className="input input-bordered flex items-center gap-5">
              Username
              <input
                type="text"
                className="grow text-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>

          <div className="mt-2">
            <label className="input input-bordered flex items-center gap-5">
              Password
              <input
                type="password"
                className="grow text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div>
            <button className="btn btn-block btn-md mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>

          <hr className="mt-5" />

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-5 inline-block"
          >
            Dont have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
