import Image from "next/image";
import React from "react";

interface UserProfileProps {
  name: string;
  email: string;
  phone: string;
  line: string;
  lines: string[];
  imageUrl?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  phone,
  line,
  lines,
  imageUrl,
}) => {
  const initials = name
    ?.split(" ")
    ?.map((n) => n[0])
    ?.join("")
    ?.toUpperCase();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg space-y-6">
        <div className="flex flex-col items-center space-y-3">
          {imageUrl ? (
            <div className="relative w-20 h-20">
              <Image
                src={imageUrl}
                alt="Profile"
                fill
                className="rounded-full border-4 border-blue-500 object-cover"
              />
            </div>
          ) : (
            <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold border-4 border-blue-500">
              {initials}
            </div>
          )}

          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Line Men
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              value={email}
              disabled
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Phone
            </label>
            <input
              value={phone}
              disabled
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Line
            </label>
            <select
              value={line}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
            >
              {lines?.map((l, i) => (
                <option key={i} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
