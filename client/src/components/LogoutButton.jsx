import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className="mt-auto flex gap-3">
      <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
      Logout
    </div>
  );
};

export default LogoutButton;
