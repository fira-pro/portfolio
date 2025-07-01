import React from "react";
import useChatStore from "src/store";
import ChatMessage from "./ChatMessage";

const ChatList = () => {
  const chatList = useChatStore((s) => s.chatList);

  return (
    <>
      {chatList.map((chat) => (
        <ChatMessage key={chat.id} {...chat} />
      ))}
    </>
  );
};

export default ChatList;
