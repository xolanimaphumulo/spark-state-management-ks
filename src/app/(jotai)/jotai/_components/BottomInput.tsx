import { isTypingAtom, messagesAtom, newMessageAtom } from "@/app/atoms/chat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAtom } from "jotai";

const BottomInput = () => {
  const [newMessage, setNewMessage] = useAtom(newMessageAtom);
  const [, setMessages] = useAtom(messagesAtom);
  const [, setIsTyping] = useAtom(isTypingAtom);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages: any) => [...prevMessages, newMessage]);
      setNewMessage("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(e.target.value.length > 0);
    setNewMessage(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex">
      <Input
        type="text"
        value={newMessage}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="flex-1 rounded-l-md border p-2"
        placeholder="Type a message..."
      />
      <Button
        onClick={handleSend}
        className="rounded-r-md bg-blue-500 p-2 text-white hover:bg-blue-700"
      >
        Send
      </Button>
    </div>
  );
};
export default BottomInput;
