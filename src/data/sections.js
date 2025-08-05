import { projectSourceLink } from "./constants";

export const portfolioSections = [
  {
    id: "about-me",
    title: "About Me",
    content: `
Hey, I’m **Firaol**. I like building cool stuff that actually works.

Sometimes that means crafting a slick \`React\` UI. Other times, it's a \`Kotlin\` Android app, a Python script that saves me hours, or a bot chatting on \`Telegram\`. I dabble in **desktop apps**, **simple backends**, **Linux server setup**, and occasionally in **reverse engineering** apps or websites to understand how they tick.

Basically: I build, break, automate, and learn - and I love every bit of it.

This site is a little snapshot of the things I enjoy making.  
If it clicks with you, let’s chat.

  `.trim(),
  },
  {
    id: "skills",
    title: "Skills",
    content: `
## 🛠️ Skills

Here’s a quick peek at the tools and tech I use regularly (or have wrestled with enough to trust in a pinch):

### 💻 Frontend
- \`React\`, \`MUI\`, \`Framer Motion\`
- Responsive design & animation nerd
- Built this whole portfolio with a chat-style UX for fun (and a job)

### 📱 Android & Desktop
- \`Kotlin\`, \`Jetpack Compose\` for Android
- \`Java\`/\`Kotlin\` for desktop apps when the web just doesn’t cut it

### ⚙️ Backend & Scripting
- \`Python\`, \`Node.js\` - for scripts, bots, and simple APIs
- Telegram bot development, task automation, and some server-side mischief

### 🧠 Other Things I’m Into
- \`Linux\` server setup & management
- \`Database\`: SQL & NoSQL (comfortable with both)
- Reverse engineering apps & websites (for research, not evil 😇)
- Security tinkering, automating repetitive stuff, and understanding how systems break (and how to fix them)

Not everything fits neatly in a list, but if it involves building, debugging, or automating - I’m usually game.

    `.trim(),
  },
  {
    id: "projects",
    title: "Projects",
    content: `
### 📁 Projects

Here are a few things I’ve built - some out of curiosity, some to solve real problems, and others just for fun:

- **[FreeFeta](https://t.me/FreeFeta)**  
  An Android app that lets you download and enjoy **movies**, **TV shows**, **music**, **podcasts**, **audiobooks**, and more - without needing mobile data or airtime.  
  Built with **Kotlin** and **Jetpack Compose**, the goal is simple: make entertainment more accessible, even when you're low on credit.

- **[fira.et](https://fira.et)**  
  You're on it! My portfolio site, styled like a chat interface with smooth animations and section-based streaming.  
  Built using \`React\`, \`MUI\`, \`Zustand\`, and \`react-markdown\`.  
  The project is open source on [GitHub](${projectSourceLink}).

- **Custom File Uploader (Java/Kotlin)**  
  A desktop tool for uploading files with automatic metadata generation, organized structure, and optional CLI interface.  
  Ideal for structured media management and automation tasks.

- **Automation & Scripts**  
  I’ve created various tools to automate everyday tasks - from syncing files and managing backups to writing **Telegram bots** in **Python** and **Node.js**.

- **Security & Reverse Engineering**  
  I enjoy digging into how Android apps and websites work under the hood.  
  It’s led me to discover vulnerabilities, understand system flows, and build stronger tools.

- **Lightweight Backends**  
  Built APIs and microservices using **Express.js**, **Flask**, and **FastAPI** - nothing too fancy, just clean and functional services.

> Most of these projects are personal or tailored for specific use cases, but I’m always happy to chat about them.
    `.trim(),
  },
  {
    id: "experience",
    title: "Experience",
    content: `
### 🧠 Experience

> In 2021, while exploring how **[Telebirr](https://www.ethiotelecom.et/telebirr/)** processes transactions, I discovered a _logical bug_ in their **price validation** that allowed near-free purchases for some services.  
>  
> I **responsibly reported** the issue to Ethiotelecom, and they fixed it quickly.

This experience sparked my interest in **security research**, **reverse engineering**, and understanding **backend logic** more deeply.
    `.trim(),
  },
  {
    id: "contact",
    title: "Contact",
    content: `
### 📬 Get in Touch

Whether you want to **collaborate**, have a question, or just want to say hi - I'm always open to chatting!

- 📧 **Email**: [hi@fira.et](mailto:hi@fira.et)
- 💬 **Telegram**: [@fira_pro](https://t.me/fira_pro)
- 💼 **LinkedIn**: [linkedin.com/in/firaol-debebe](https://linkedin.com/in/firaol-debebe)
- 🛠 **GitHub**: [github.com/fira-pro](https://github.com/fira-pro)

_You can also reach me by phone if needed - just drop me a message first!_
    `.trim(),
  },
];
