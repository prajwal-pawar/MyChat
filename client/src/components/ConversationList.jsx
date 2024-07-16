import Conversation from "./Conversation";
import useFetchConversations from "../hooks/useFetchConversations";

const ConversationList = () => {
  // conversations hook
  const { loading, conversations } = useFetchConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}

      {/* conversations */}
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={index === conversations.length - 1} // last index
        />
      ))}
    </div>
  );
};

export default ConversationList;
