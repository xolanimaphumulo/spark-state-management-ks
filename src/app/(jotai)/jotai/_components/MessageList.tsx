interface MessageListProps {
  messages: string[];
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <ul className="space-y-2">
      {messages.map((message, index) => (
        <li key={index} className="rounded-md bg-gray-200 p-2 shadow-sm">
          {message}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
