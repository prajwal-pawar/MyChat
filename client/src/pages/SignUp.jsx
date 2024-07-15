import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");

  // signup hook
  const { loading, signUp } = useSignUp();

  const handleSignUp = async (e) => {
    e.preventDefault();

    await signUp({ fullName, username, password, confirmPassword, gender });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-1/2 p-6 rounded-lg bg-gray-700">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> MyChat</span>
        </h1>

        <form onSubmit={handleSignUp}>
          <div className="mt-2">
            <label className="input input-bordered flex items-center gap-5">
              Full Name
              <input
                type="text"
                className="grow text-white"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
              />
            </label>
          </div>

          <div className="mt-2">
            <label className="input input-bordered flex items-center gap-5">
              Username
              <input
                type="text"
                className="grow text-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="johndoe"
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

          <div className="mt-2">
            <label className="input input-bordered flex items-center gap-5">
              Confirm Password
              <input
                type="password"
                className="grow text-white"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
          </div>

          <div className="flex">
            <div className="form-control">
              <label
                className={`label gap-2 cursor-pointer ${
                  gender === "male" ? "selected" : ""
                }`}
              >
                <span className="label-text text-white">Male</span>
                <input
                  type="checkbox"
                  className="checkbox border-slate-900"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                />
              </label>
            </div>
            <div className="form-control">
              <label
                className={`label gap-2 cursor-pointer ${
                  gender === "female" ? "selected" : ""
                }`}
              >
                <span className="label-text text-white">Female</span>
                <input
                  type="checkbox"
                  className="checkbox border-slate-900"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                />
              </label>
            </div>
          </div>

          <div>
            <button className="btn btn-block btn-md mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>

          <hr className="mt-5" />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-5 inline-block"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
