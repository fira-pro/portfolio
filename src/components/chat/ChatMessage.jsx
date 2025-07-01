import React, { useEffect, useState, useRef } from "react";
import remarkGfm from "remark-gfm";
import useChatStore from "src/store";
import ChatBubble from "./ChatBubble";
import Markdown from "react-markdown";
import { streamSpeed } from "src/constants";
const ChatMessage = ({
  id,
  title,
  content,
  hasStreamed,
}) => {
  const [displayed, setDisplayed] = useState("");
  const markAsStreamed = useChatStore(
    (s) => s.markAsStreamed
  );
  const setStreaming = useChatStore((s) => s.setStreaming);
  const indexRef = useRef(0); // Holds current character index
  const timeoutRef = useRef(null); // For cleanup

  useEffect(() => {
    if (hasStreamed) {
      setDisplayed(content); // Instantly show full message if already streamed
      return;
    }

    setStreaming(true); // Lock streaming globally

    const stream = () => {
      if (indexRef.current < content.length) {
        const nextChar = content[indexRef.current];
        setDisplayed((prev) => prev + nextChar);
        indexRef.current++;
        timeoutRef.current = setTimeout(
          stream,
          streamSpeed
        ); // Adjust speed here
      } else {
        markAsStreamed(id);
        setStreaming(false);
      }
    };

    stream();

    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    // <div className="chat-pair">
    //   <div className="user-msg">{title}</div>
    //   <div className="ai-msg">{displayed}</div>
    // </div>
    <>
      <ChatBubble type="user">
        <Markdown remarkPlugins={[remarkGfm]}>
          {title}
        </Markdown>
      </ChatBubble>
      <ChatBubble type="assistant">
        <Markdown remarkPlugins={[remarkGfm]}>
          {displayed}
        </Markdown>
      </ChatBubble>
    </>
  );
};

export default ChatMessage;
