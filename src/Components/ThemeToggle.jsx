'use client'; // Required for client-side interactivity in App Router

import { useTheme } from '../context/ThemeContext';
import {FaMoon, FaSun} from "react-icons/fa";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded text-sm absolute top-3 right-3"
    >
      {theme === 'light' ? <FaMoon /> : <FaSun/>}
    </button>
  );
}
