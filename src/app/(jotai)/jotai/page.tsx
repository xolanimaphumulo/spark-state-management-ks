"use client";

import { useAtom } from "jotai";
import { messagesAtom, isTypingAtom } from "@/app/atoms/chat";

import MessageList from "./_components/MessageList";
import BottomInput from "./_components/BottomInput";

const Chat = () => {
  const [messages] = useAtom(messagesAtom);
  const [isTyping] = useAtom(isTypingAtom);

  return (
    <div className="flex h-screen flex-col">
      <h3>{isTyping ? "Is Typing" : ""}</h3>
      <div className="flex-1 overflow-auto p-4">
        <MessageList messages={messages} />
      </div>
      <div className="p-4">
        <BottomInput />
      </div>
    </div>
  );
};

export default Chat;
