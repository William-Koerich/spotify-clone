import React from "react";

/* ------| Temas |------ */
import { DarkTheme } from '../../styles/theme/dark'
import { LightTheme } from '../../styles/theme/light'

/* ------| Interface |------ */
interface SwitchThemeContextProps {
  SwitchTheme?: () => void
}

interface SwitchThemeProviderProps {
  children: React.ReactNode
}

export const SwitchThemeContext = React.createContext({
  SwitchTheme: () => {}
} as SwitchThemeContextProps)