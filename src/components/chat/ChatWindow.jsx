import Box from "@mui/material/Box";
import IntroHeader from "./IntroHeader";
import ChatBubble from "./ChatBubble";
import Markdown from "react-markdown";
import { useState } from "react";
import { useEffect } from "react";
import remarkGfm from "remark-gfm";
import Suggestions from "./Suggestions";
import ChatList from "./ChatList";

const markdown = `
# Lorem Ipsum

**Lorem ipsum** dolor sit amet, _consectetur_ adipiscing elit.

- Item 1
- Item 2
- Item 3

\`\`\`js
console.log("Hello, world!");
\`\`\`

[Learn more](https://www.lipsum.com/)

---

![Vite Logo](/vite.svg)

## More Markdown Ipsum

> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."

### Code Example

\`\`\`python
def greet():
    print("Hello, Markdown!")
\`\`\`

1. First ordered item
2. Second item
3. Third item

---

### Table

| Syntax | Description |
|--------|-------------|
| Header | Title       |
| Paragraph | Text     |

---

#### Blockquote

> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.

---

**Bold text**, *italic text*, and \`inline code\`.

- [x] Task 1
- [ ] Task 2
- [ ] Task 3

---
`;

export default function ChatWindow() {
  const [markdownStream, setMarkdownStream] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      setMarkdownStream(
        markdownStream +
          markdown.substring(
            markdownStream.length,
            markdownStream.length + 10
          )
      );
      if (markdownStream.length >= markdown.length)
        // setMarkdownStream("");
        clearTimeout(id);
    }, 10);
  }, [markdownStream]);

  return (
    <Box
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        py: 2,
      }}
    >
      <IntroHeader />
      <Suggestions />
      <ChatList />
    </Box>
  );
}
