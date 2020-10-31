import React from "react";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Ellen"
        message="dfafejklal"
        timestamp="12 minutes ago"
        profilePic="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2017%2F09%2F01-shutterstock_476340928-Irina-Bg-1024x683.jpg&f=1&nofb=1"
      />
      <Chat
        name="Wallice"
        message="dfafejk  dfsa  lal"
        timestamp="50 minutes ago"
      />
    </div>
  );
}

export default Chats;
