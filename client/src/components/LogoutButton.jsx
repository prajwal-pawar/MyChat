import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout";

const LogoutButton = () => {
  // logout hook
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto p-3 border-t border-gray-700">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <div className="flex gap-3 cursor-pointer" onClick={logout}>
          <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
          Logout
        </div>
      )}
    </div>
  );
};

export default LogoutButton;
