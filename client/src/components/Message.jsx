const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://avatar.iran.liara.run/public" alt="user avatar" />
        </div>
      </div>

      <div className="chat-bubble text-white bg-blue-500">Hi how are you!</div>
      <div className="chat-footer text-xs flex gap-1 items-center">12:00</div>
    </div>
  );
};

export default Message;
