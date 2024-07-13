import SearchInput from "./SearchInput";
import ConversationList from "./ConversationList";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r border-gray-500 p-4 flex flex-col">
      <SearchInput />

      <div className="divider px-3" />

      <ConversationList />

      <LogoutButton />
    </div>
  );
};

export default Sidebar;
