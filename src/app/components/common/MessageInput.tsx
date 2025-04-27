// MessageInput.tsx
import React, { useState } from 'react';

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // Handle sending message + image
  const handleSendMessage = () => {
    if (message.trim() || selectedImage) {
      console.log('Message sent:', message);
      if (selectedImage) {
        console.log('Image sent:', selectedImage.name);
      }

      // Reset after sending
      setMessage('');
      setSelectedImage(null);
    }
  };

  return (
    <div className="flex items-center p-4 bg-white border-t border-gray-200">
      {/* Image upload button */}
      <label htmlFor="image-upload" className="cursor-pointer mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 hover:text-gray-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 3v18h14V3H5zm7 10l4-4-4-4-4 4 4 4z" />
        </svg>
      </label>
      <input
        type="file"
        id="image-upload"
        className="hidden"
        accept="image/*"
        onChange={handleImageChange}
      />

      {/* Message input field */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage();
          }
        }}
        placeholder="Type a message"
        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* Send button */}
      <button
        onClick={handleSendMessage}
        className="ml-3 text-white bg-green-500 p-3 rounded-full hover:bg-green-600 transition"
      >
        Send
      </button>

      {/* Image preview */}
      {selectedImage && (
        <div className="flex items-center ml-3">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="selected preview"
            className="h-10 w-10 object-cover rounded-lg"
          />
          <button
            className="ml-2 text-red-500"
            onClick={() => setSelectedImage(null)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default MessageInput;
