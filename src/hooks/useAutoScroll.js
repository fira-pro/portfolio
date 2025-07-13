import { useRef, useEffect, useState } from "react";

export const useAutoScroll = (dependencies = []) => {
  const bottomRef = useRef(null);
  const containerRef = useRef(null);
  const [showScrollButton, setShowScrollButton] =
    useState(false);

  // Always scroll to show user message at top when new chat is added
  useEffect(() => {
    if (dependencies[0] > 0) {
      // streamedSections.length
      const timer = setTimeout(() => {
        const lastSectionId =
          dependencies[2]?.[dependencies[0] - 1]; // Get last section ID
        const userMessageElement = document.querySelector(
          `[data-user-message="${lastSectionId}"]`
        );

        if (userMessageElement && containerRef.current) {
          const container = containerRef.current;
          const elementTop = userMessageElement.offsetTop;
          const targetScroll = elementTop - 20; // 20px padding from top

          container.scrollTo({
            top: targetScroll,
            behavior: "smooth",
          });
        }
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [dependencies[0]]); // Only trigger on streamedSections.length change

  // Check scroll position and show/hide button
  useEffect(() => {
    const checkScrollPosition = () => {
      if (containerRef.current && bottomRef.current) {
        const container = containerRef.current;
        const isNearBottom =
          container.scrollHeight -
            container.scrollTop -
            container.clientHeight <
          50;

        const hasContent = dependencies[0] > 0; // streamedSections.length > 0
        const hasScrollableContent =
          container.scrollHeight > container.clientHeight;

        setShowScrollButton(
          hasContent &&
            hasScrollableContent &&
            !isNearBottom
        );
      }
    };

    // Check immediately and set up observer
    checkScrollPosition();

    const container = containerRef.current;
    if (container) {
      // Use passive listeners for better performance
      container.addEventListener(
        "scroll",
        checkScrollPosition,
        { passive: true }
      );

      // Use ResizeObserver to detect content changes during streaming
      const resizeObserver = new ResizeObserver(() => {
        checkScrollPosition();
      });

      resizeObserver.observe(container);

      return () => {
        container.removeEventListener(
          "scroll",
          checkScrollPosition
        );
        resizeObserver.disconnect();
      };
    }
  }, [dependencies[0]]); // streamedSections.length

  // Also check when content changes during streaming
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const isNearBottom =
        container.scrollHeight -
          container.scrollTop -
          container.clientHeight <
        50;

      const hasContent = dependencies[0] > 0; // streamedSections.length > 0
      const hasScrollableContent =
        container.scrollHeight > container.clientHeight;

      setShowScrollButton(
        hasContent && hasScrollableContent && !isNearBottom
      );
    }
  }, [dependencies[1], dependencies[3]]); // currentStreamingId, streamedContent changes

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  return {
    bottomRef,
    containerRef,
    showScrollButton,
    scrollToBottom,
  };
};
