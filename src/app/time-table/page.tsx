"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import useUserStore from "@/store/useUserStore";

const WeekTimeTableComponent = () => {
  const { user } = useUserStore();
  const [forms, setForms] = useState([0]); // array to track how many forms

  const addForm = () => {
    setForms((prev) => [...prev, prev.length]);
  };

  return (
    <div className="space-y-6">
      {forms.map((formId) => (
        <div
          key={formId}
          className="w-full max-w-sm mx-auto p-4 bg-white rounded-2xl shadow space-y-4"
        >
          {/* Message */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="message" className="text-sm text-gray-600">
              Message
            </label>
            <input
              id="message"
              type="text"
              placeholder="Enter your message"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="description" className="text-sm text-gray-600">
              Description
            </label>
            <input
              id="description"
              type="text"
              placeholder="Enter your description"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Line Selection */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="line" className="text-sm text-gray-600">
              Select Line
            </label>
            <select
              id="line"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Line</option>
              {user?.line.map((line: string, index: number) => (
                <option key={index} value={line}>
                  {line}
                </option>
              ))}
            </select>
          </div>

          {/* Weekday Selection */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="weekday" className="text-sm text-gray-600">
              Select Weekday
            </label>
            <select
              id="weekday"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Day</option>
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
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

          {/* Submit */}
          <button
            type="button"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      ))}

      {/* + Add Form Button */}
      <div className="flex justify-center">
        <button
          onClick={addForm}
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

export default WeekTimeTableComponent;
