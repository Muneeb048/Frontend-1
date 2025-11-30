import React from "react";

const ChatInput: React.FC<{
  onSend: (message: string) => void;
  disabled: boolean;
}> = ({ onSend, disabled }) => {
  const [input, setInput] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <div className="border-t border-gray-800 bg-[#030d13] p-4 md:p-6">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={disabled}
          placeholder="Type your message..."
          className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={disabled || !input.trim()}
          className="bg-teal-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
