"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

const ThemeCom = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="text-gray-700 dark:text-white dark:bg-gray-900 min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default ThemeCom;
