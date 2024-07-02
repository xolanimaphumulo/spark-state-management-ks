// NotifierContext.tsx
"use client";
import React, {
  createContext,
  useState,
  useContext,
  type ReactNode,
} from "react";

import { useToast } from "@/components/ui/use-toast";

interface NotifierContextType {
  toast: ReturnType<typeof useToast>["toast"];
}

const NotifierContext = createContext<NotifierContextType | undefined>(
  undefined,
);

export const NotifierProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { toast } = useToast();

  const contextValue: NotifierContextType = {
    toast,
  };

  return (
    <NotifierContext.Provider value={contextValue}>
      {children}
    </NotifierContext.Provider>
  );
};

export const useNotifier = (): NotifierContextType => {
  const context = useContext(NotifierContext);
  if (!context) {
    throw new Error("useNotifier must be used within a NotifierProvider");
  }
  return context;
};
