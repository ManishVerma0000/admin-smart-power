// UserList.tsx
"use client"
import React from 'react';

type User = {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
};

const users: User[] = [
  { id: 1, name: 'Alice', lastMessage: 'See you soon!', time: '10:45 AM', unreadCount: 2 },
  { id: 2, name: 'Bob', lastMessage: 'Let’s meet tomorrow.', time: '9:30 AM', unreadCount: 0 },
  { id: 3, name: 'Charlie', lastMessage: 'Okay!', time: 'Yesterday', unreadCount: 1 },
  { id: 4, name: 'David', lastMessage: 'Call me back.', time: 'Monday', unreadCount: 0 },
];

const UserList: React.FC = () => {
  return (
    <div className="h-screen w-full max-w-md mx-auto bg-white shadow-md overflow-y-auto">
      <div className="p-4 text-xl font-bold border-b border-gray-200">Chats</div>
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
        >
          <div className="flex items-center">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-4">
              {user.name.charAt(0)}
            </div>
            {/* User Info */}
            <div>
              <div className="font-semibold">{user.name}</div>
              <div className="text-sm text-gray-500 truncate w-40">{user.lastMessage}</div>
            </div>
          </div>

          {/* Time and unread messages */}
          <div className="flex flex-col items-end">
            <div className="text-xs text-gray-400">{user.time}</div>
            {user.unreadCount > 0 && (
              <div className="mt-1 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {user.unreadCount}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
