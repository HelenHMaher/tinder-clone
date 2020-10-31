import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2017%2F09%2F01-shutterstock_476340928-Irina-Bg-1024x683.jpg&f=1&nofb=1",
      message: "What's up",
    },
    {
      name: "Ellen",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2017%2F09%2F01-shutterstock_476340928-Irina-Bg-1024x683.jpg&f=1&nofb=1",
      message: "How are you?",
    },
    { message: "Hey, pretty good!" },
  ]);

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              src={message.image}
              alt={message.name}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
    </div>
  );
}

export default ChatScreen;
