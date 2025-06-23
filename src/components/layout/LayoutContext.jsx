import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const LayoutContext = createContext();

function LayoutProvider({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <LayoutContext
      value={{ isDrawerOpen, setIsDrawerOpen }}
    >
      {children}
    </LayoutContext>
  );
}

function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error(
      "useLayout must be used within a LayoutProvider"
    );
  }
  return context;
}

export { LayoutProvider, useLayout, LayoutContext };
