import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search users"
        className="input input-bordered rounded-md"
      />

      <button type="submit" className="btn btn-square bg-sky-600 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
