import useChatStore from "src/store";
import { sections } from "src/data/sections";
const Suggestions = () => {
  const addChat = useChatStore((s) => s.addChat);
  const isStreaming = useChatStore((s) => s.isStreaming);
  const chatList = useChatStore((s) => s.chatList);

  const handleClick = (section) => {
    if (isStreaming) return;

    const alreadyUsed = chatList.some(
      (chat) => chat.title === section.title
    );
    if (alreadyUsed) return;

    const newChat = {
      id: crypto.randomUUID(),
      title: section.title,
      content: section.content,
      hasStreamed: false,
    };

    addChat(newChat);
  };

  return (
    <div className="suggestions">
      {sections.map((section) => (
        <button
          key={section.title}
          onClick={() => handleClick(section)}
        >
          {section.title}
        </button>
      ))}
    </div>
  );
};

export default Suggestions;
