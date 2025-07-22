import { create } from "zustand";
import { portfolioSections } from "./data/sections";
import { streamSpeed } from "./data/constants";

const usePortfolioStore = create((set, get) => ({
  // Portfolio sections data
  sections: portfolioSections.map((section) => ({
    ...section,
    status: "idle",
  })), // Initialize with idle status

  currentStreamingId: null,
  streamedSections: [], // Array to maintain order of streamed sections
  streamedContent: {},

  // Actions
  startStreaming: async (sectionId) => {
    const { sections, streamedContent, streamedSections } =
      get();
    const section = sections.find(
      (s) => s.id === sectionId
    );

    if (!section || streamedContent[sectionId]?.isComplete)
      return;

    // Stop any current streaming
    set({ currentStreamingId: null });

    // Add to streamed sections if not already there
    if (!streamedSections.includes(sectionId)) {
      set((state) => ({
        streamedSections: [
          ...state.streamedSections,
          sectionId,
        ],
      }));
    }

    // Set loading state
    set((state) => ({
      sections: state.sections.map((s) =>
        s.id === sectionId
          ? { ...s, status: "loading" }
          : { ...s, status: s.status }
      ),
      currentStreamingId: sectionId,
      streamedContent: {
        ...state.streamedContent,
        [sectionId]: { content: "", isComplete: false },
      },
    }));

    // Simulate loading delay
    await new Promise((resolve) =>
      setTimeout(resolve, streamSpeed * 100)
    );

    // Start streaming
    set((state) => ({
      sections: state.sections.map((s) =>
        s.id === sectionId
          ? { ...s, status: "streaming" }
          : s
      ),
    }));

    // Stream content only
    await get().streamText(sectionId, section.content);

    // Mark as complete
    set((state) => ({
      sections: state.sections.map((s) =>
        s.id === sectionId
          ? { ...s, status: "completed" }
          : s
      ),
      streamedContent: {
        ...state.streamedContent,
        [sectionId]: {
          ...state.streamedContent[sectionId],
          isComplete: true,
        },
      },
      currentStreamingId: null,
    }));
  },

  streamText: async (sectionId, text) => {
    const words = text.split(" ");

    for (let i = 0; i <= words.length; i++) {
      // Check if streaming was interrupted
      if (get().currentStreamingId !== sectionId) break;

      const partialText = words.slice(0, i).join(" ");

      set((state) => ({
        streamedContent: {
          ...state.streamedContent,
          [sectionId]: {
            ...state.streamedContent[sectionId],
            content: partialText,
          },
        },
      }));

      // ! Still not fixed
      // Use requestAnimationFrame instead of setTimeout for better performance
      // and to avoid pausing when tab is not active
      if (i < words.length) {
        await new Promise((resolve) => {
          let startTime = performance.now();
          const animate = (currentTime) => {
            if (currentTime - startTime >= streamSpeed) {
              // 100ms delay
              resolve();
            } else {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        });
      }
    }
  },
}));

export default usePortfolioStore;
