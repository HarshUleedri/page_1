import { createContext } from "react";

export interface ThemeContextType {
  isDark: boolean;
  setIsDark: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
