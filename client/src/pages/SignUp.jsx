const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-1/2 p-6 rounded-lg bg-gray-700">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> MyChat</span>
        </h1>

        <form>
          <div className="mt-2">
            <label className="input input-bordered flex items-center gap-5">
              Full Name
              <input type="text" className="grow" placeholder="John Doe" />
            </label>
          </div>

          <div className="mt-2">
            <label className="input input-bordered flex items-center gap-5">
              Username
              <input type="text" className="grow" placeholder="johndoe" />
            </label>
          </div>

          <div className="mt-2">
            <label className="input input-bordered flex items-center gap-5">
              Password
              <input type="password" className="grow" />
            </label>
          </div>

          <div className="mt-2">
            <label className="input input-bordered flex items-center gap-5">
              Confirm Password
              <input type="password" className="grow" />
            </label>
          </div>

          <div className="flex">
            <div className="form-control">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox border-slate-900" />
              </label>
            </div>
            <div className="form-control">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox border-slate-900" />
              </label>
            </div>
          </div>

          <div>
            <button className="btn btn-block btn-md mt-2">Sign Up</button>
          </div>

          <hr className="mt-5" />

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-5 inline-block"
          >
            Already have an account?
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
