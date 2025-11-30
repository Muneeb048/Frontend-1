import React from "react";
import type { Message } from "../types";
import { useTypingEffect } from "../hooks/useTypingEffect";

const ChatMessage: React.FC<{ message: Message; isLatest: boolean }> = ({
  message,
  isLatest,
}) => {
  const { displayedText, isTyping } = useTypingEffect(
    message.sender === "bot" && isLatest ? message.text : message.text,
    30
  );

  const textToShow =
    message.sender === "bot" && isLatest ? displayedText : message.text;

  return (
    <div
      className={`flex ${
        message.sender === "user" ? "justify-end" : "justify-start"
      } mb-6`}
    >
      <div
        className={`max-w-2xl px-6 py-4 rounded-2xl ${
          message.sender === "user"
            ? "bg-teal-600 text-white"
            : "bg-gray-800 text-white"
        }`}
      >
        <p className="text-base leading-relaxed">
          {textToShow}
          {message.sender === "bot" && isLatest && isTyping && (
            <span className="inline-block w-1 h-5 bg-teal-400 ml-1 animate-pulse"></span>
          )}
        </p>
      </div>
    </div>
  );
};
export default ChatMessage;
