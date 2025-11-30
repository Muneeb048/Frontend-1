import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import RightPanel from "./RightPanel";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import type { Message } from "../types";

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hii there! Let's get started with a simple one. Could you please tell me your name?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, messages[messages.length - 1]?.text.length * 30 + 100);
    return () => clearTimeout(timer);
  }, [messages]);

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Nice to meet you! Thaank you for sharing. Now, let's continue with the next question...`,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#030d13] flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Chat Area */}
        <div className="w-full lg:flex-1 flex flex-col items-center">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6 md:py-8 w-full">
            <div className="max-w-2xl mx-auto w-full">
              {messages.map((message, index) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  isLatest={index === messages.length - 1}
                />
              ))}
              <div ref={chatEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="w-full px-4 sm:px-6 md:px-8">
            <div className="max-w-2xl mx-auto w-full">
              <ChatInput onSend={handleSendMessage} disabled={isTyping} />
            </div>
          </div>
        </div>

        {/* Right Panel - hidden on mobile */}
        <div className="hidden lg:flex lg:w-1/3  lg:flex-col lg:items-center lg:justify-center bg-[#030d13] border-l border-gray-800  ">
          <div className="w-full">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
