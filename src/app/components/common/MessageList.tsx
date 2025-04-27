// MessageList.tsx
import React from 'react';

type Message = {
  text: string;
  sender: 'me' | 'them';
  timestamp: string;
};

const messages: Message[] = [
  { text: 'Hey, how are you?', sender: 'them', timestamp: '10:30 AM' },
  { text: 'I am good! What about you?', sender: 'me', timestamp: '10:31 AM' },
  { text: 'I am doing well too!', sender: 'them', timestamp: '10:32 AM' },
  { text: 'Great to hear!', sender: 'me', timestamp: '10:33 AM' },
];

const MessageList: React.FC = () => {
  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'} mb-3`}
        >
          <div
            className={`max-w-xs p-3 rounded-lg shadow-sm ${
              message.sender === 'me' ? 'bg-green-100' : 'bg-white'
            }`}
          >
            <div>{message.text}</div>
            <div className="text-xs text-gray-400 mt-1">{message.timestamp}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
