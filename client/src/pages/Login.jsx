const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-1/2 p-6 rounded-lg bg-gray-700">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-500"> MyChat</span>
        </h1>

        <form>
          <div className="mt-2">
            <label className="input input-bordered flex items-center gap-5">
              Username
              <input type="text" className="grow text-white" />
            </label>
          </div>

          <div className="mt-2">
            <label className="input input-bordered flex items-center gap-5">
              Password
              <input type="password" className="grow text-white" />
            </label>
          </div>

          <div>
            <button className="btn btn-block btn-md mt-2">Login</button>
          </div>

          <hr className="mt-5" />

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-5 inline-block"
          >
            Dont have an account?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
