import { useRef, useEffect, useState } from "react";

export const useAutoScroll = (dependencies = []) => {
  const bottomRef = useRef(null);
  const containerRef = useRef(null);
  const [showScrollButton, setShowScrollButton] =
    useState(false);
  const [isUserScrolling, setIsUserScrolling] =
    useState(false);

  // Auto-scroll to bottom
  useEffect(() => {
    if (!isUserScrolling && bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [...dependencies, isUserScrolling]);

  // Handle scroll detection
  useEffect(() => {
    const checkScrollPosition = () => {
      if (containerRef.current && bottomRef.current) {
        const container = containerRef.current;
        const isNearBottom =
          container.scrollHeight -
            container.scrollTop -
            container.clientHeight <
          100;

        setShowScrollButton(
          !isNearBottom && dependencies[0] > 0
        );

        if (isNearBottom) {
          setIsUserScrolling(false);
        }
      }
    };

    const handleScroll = () => {
      setIsUserScrolling(true);
      checkScrollPosition();

      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        checkScrollPosition();
      }, 150);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      checkScrollPosition();

      return () => {
        container.removeEventListener(
          "scroll",
          handleScroll
        );
        clearTimeout(window.scrollTimeout);
      };
    }
  }, dependencies);

  const scrollToBottom = () => {
    setIsUserScrolling(false);
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return {
    bottomRef,
    containerRef,
    showScrollButton,
    scrollToBottom,
  };
};
