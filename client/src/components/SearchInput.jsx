import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { toast } from "react-hot-toast";
import useConversation from "../store/useConversation";
import useFetchConversations from "../hooks/useFetchConversations";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  // zustand store
  const { setSelectedConversation } = useConversation();
  // conversations hook
  const { conversations } = useFetchConversations();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }

    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No users found");
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered rounded-md"
      />

      <button type="submit" className="btn btn-square bg-sky-600 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
