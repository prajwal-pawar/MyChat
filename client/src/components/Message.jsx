import moment from "moment";
import useAuth from "../hooks/useAuth";
import useConversation from "../store/useConversation";

const Message = ({ message }) => {
  // auth hook
  const { authUser } = useAuth();
  // zustand store
  const { selectedConversation } = useConversation();

  const messageFromMe = message.senderId === authUser._id;
  const profilePicture = messageFromMe
    ? authUser.profilePicture
    : selectedConversation?.profilePicture;

  return (
    <div className={`chat ${messageFromMe ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePicture} alt="user avatar" />
        </div>
      </div>

      <div
        className={`chat-bubble text-white ${
          messageFromMe ? "bg-blue-500" : "bg-gray-600"
        }`}
      >
        {message.message}
      </div>
      <div className="chat-footer text-xs flex gap-1 items-center">
        {moment(message.createdAt).format("Do MMM YY, h:mm a")} (
        {moment(message.createdAt).fromNow()})
      </div>
    </div>
  );
};

export default Message;
