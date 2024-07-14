import { TiMessage } from "react-icons/ti";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

const MessageContainer = () => {
  const noChatSelected = false;

  return (
    <div className="w-full max-h-full flex flex-col p-4 overflow-auto">
      {noChatSelected ? (
        <div className="flex items-center justify-center w-full h-full">
          <div className="px-4 text-center text-lg text-gray-200 font-semibold flex flex-col items-center gap-2">
            <p>
              Welcome to MyChat <span className="text-blue-500">John Doe</span>.
            </p>
            <p>Select a chat to start a conversation.</p>
            <TiMessage className="text-3xl text-center" />
          </div>
        </div>
      ) : (
        <>
          <header>
            <div className="bg-slate-500 px-4 py-2 mb-2 rounded-md text-center">
              <span className="text-white font-bold">John Doe</span>
            </div>
          </header>

          <MessageList />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
