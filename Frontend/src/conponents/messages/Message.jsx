const Message = () => {
  return (
    <div className="chat chat-end">
      <div className=" chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={
              "https://cdn1.iconfinder.com/data/icons/user-avatar-26/1000/Profile-Person-Man-Woman-People-Female-Male-Account0A_013_SVG-512.png"
            }
            alt="Taiwind css chat bubble "
          />
        </div>
      </div>
      <div className={"chat-bubble text-white bg-blue-500"}>hello</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:12
      </div>
    </div>
  );
};

export default Message;
