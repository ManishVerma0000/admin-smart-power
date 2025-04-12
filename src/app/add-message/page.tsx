import React from "react";

const InputSelectBox = () => {
  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-2xl shadow space-y-4 mt-12">

      {/* Name */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="name" className="text-sm text-gray-600">
          Message
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your message"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="name" className="text-sm text-gray-600">
          Description
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your Description"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Role */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="role" className="text-sm text-gray-600">
          Select Line
        </label>
        <select
          id="role"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Line</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="guest">Guest</option>
        </select>
      </div>

      {/* Time In */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="timeIn" className="text-sm text-gray-600">
          Time In
        </label>
        <input
          id="timeIn"
          type="time"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Time Out */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="timeOut" className="text-sm text-gray-600">
          Time Out
        </label>
        <input
          id="timeOut"
          type="time"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Image Upload */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="image" className="text-sm text-gray-600">
          Upload Image
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          className="block text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {/* Submit Button */}
      <button
        type="button"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  );
};

export default InputSelectBox;
