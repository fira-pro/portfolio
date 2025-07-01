import { create } from "zustand";

const useChatStore = create((set) => ({
  //   state: "started", // started, loading, streaming, loaded
  isStreaming: false,
  chatList: [],
  setState: (newState) => set({ state: newState }),
  addChat: (chat) =>
    set((state) => ({
      chatList: [...state.chatList, chat],
    })),
  markAsStreamed: (id) =>
    set((state) => ({
      chatList: state.chatList.map((chat) =>
        chat.id === id
          ? { ...chat, hasStreamed: true }
          : chat
      ),
    })),
  setStreaming: (value) => set({ isStreaming: value }),
}));

export default useChatStore;
