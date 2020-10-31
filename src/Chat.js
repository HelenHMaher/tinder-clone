import React from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <div className="chat">
      {/* error in that it's not showing the name as the alt */}
      <Avatar className="chat__image" src={profilePic} alt={name} />
      <div className="chat__details">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className="chat__timestamp">{timestamp}</p>
    </div>
  );
}

export default Chat;
