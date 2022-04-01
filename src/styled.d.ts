import 'styled-components'

declare module 'styled-components' {
  export interface StyledTheme {
    title: string;
    colors: {
      primary: string;
      text: {
        primary: string;
        secondary: string;
      }
    }
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    }
    font: {
      family: {
        sans: string;
        mono: string;
      }
    }
  }
}