"use client";
import useUserStore from "@/store/useUserStore";
import React, { useState } from "react";
import api from "../api/api";

const InputSelectBox = () => {
  const { user } = useUserStore();
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");
  const [line, setLine] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("message", String(message));
    formData.append("description", String(description));
    formData.append("timeIn", String(timeIn));
    formData.append("timeOut", String(timeOut));
    formData.append("district", String(image));
    formData.append("line", String(image));
    formData.append("powerHouse", String(description));
    formData.append("lineMen", String(user?.name)); // or any lineMen name
    formData.append("image", description); // this is a file

    try {
      const res = await api.post("/linemen/message", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-2xl shadow space-y-4">
      {/* Message */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm text-gray-600">Message</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm text-gray-600">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your description"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Line Select */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm text-gray-600">Select Line</label>
        <select
          value={line}
          onChange={(e) => setLine(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Line</option>
          {user?.line?.map((lines: string, index: number) => (
            <option key={index} value={lines}>
              {lines}
            </option>
          ))}
        </select>
      </div>

      {/* Time In */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm text-gray-600">Time In</label>
        <input
          type="time"
          value={timeIn}
          onChange={(e) => setTimeIn(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Time Out */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm text-gray-600">Time Out</label>
        <input
          type="time"
          value={timeOut}
          onChange={(e) => setTimeOut(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Image Upload */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm text-gray-600">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="block text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {/* Submit */}
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  );
};

export default InputSelectBox;
