// ChatWindow.tsx
"use client"
import React from "react";
import MessageList from "../components/common/MessageList";
import MessageInput from "../components/common/MessageInput";

const ChatWindow: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center p-4 bg-green-600 text-white">
        <button className="mr-4 text-2xl font-bold hover:text-gray-300">
          ←
        </button>
        <div className="font-semibold text-lg">Chat with Alice</div>
      </div>

      {/* Message List */}
      <MessageList />

      {/* Message Input */}
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
