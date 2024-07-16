import useSocket from "../hooks/useSocket";
import useConversation from "../store/useConversation";

const Conversation = ({ conversation, lastIndex }) => {
  // zustand store
  const { selectedConversation, setSelectedConversation } = useConversation();
  // socket hook
  const { onlineUsers } = useSocket();

  // if selected conversation id is equal to current conversation id
  const selected = selectedConversation?._id === conversation._id;

  const isUserOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-600 rounded-sm p-2 py-2 cursor-pointer ${
          selected ? "bg-sky-700" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isUserOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePicture} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      {/* if not last index, then show divider */}
      {!lastIndex && <div className="divider my-1 py-0 h-1" />}
    </>
  );
};

export default Conversation;
