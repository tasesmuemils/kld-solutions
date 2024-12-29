'use client';

import { create } from 'zustand';
import { useEffect } from 'react';

const useThemeStore = create((set) => ({
  colorTheme: 'light', // Initialize with a default value
  setColorTheme: (theme) => set({ colorTheme: theme }), // Update the store state
}));

const useInitializeTheme = () => {
  const setColorTheme = useThemeStore((state) => state.setColorTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setColorTheme(storedTheme);
  }, [setColorTheme]);
};

export { useThemeStore, useInitializeTheme };
