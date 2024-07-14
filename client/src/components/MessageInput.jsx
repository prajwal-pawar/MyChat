import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="flex gap-3 w-full">
        <input
          type="text"
          placeholder="Send a message"
          className="border text-md rounded-md block w-[94%] bg-gray-700 border-gray-600 text-white p-2"
        />

        <button
          type="submit"
          className="btn btn-square bg-sky-600 text-white w-[6%]"
        >
          <BsSend className="w-6 h-6 outline-none" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
