// src/store/useUserStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  _id: string;
  name: string;
  email: string;
  profileImageUrl: string;
  line: string[];
  district: string;
  state: string;
  lastLoginAt: string;
  profileUpdatedAt: string;
  // Add other fields you may need, for example:
  token: string; // JWT token or any other token for authentication
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,

      // Function to set user data
      setUser: (user) => set({ user }),

      // Function to logout and clear the user data
      logout: () => set({ user: null }),
    }),
    {
      name: "user-storage", // The key for localStorage
      partialize: (state) => ({
        user: state.user, // Persist only the `user` part of the state
      }),
    }
  )
);

export default useUserStore;
