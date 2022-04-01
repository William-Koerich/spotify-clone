import type { AppProps } from 'next/app'
import React from 'react'
import cookie from 'js-cookie'

/* ------| Contextos |------ */
import { ThemeProvider } from 'styled-components'
import { SwitchThemeContext } from '../src/contexts/SwitchTheme'

/* ------| Temas |------ */
import { DarkTheme } from '../src/styles/theme/dark'
import { LightTheme } from '../src/styles/theme/light'

/* ------| Estilos |------ */
import { GlobalStyle } from '../src/styles/theme/globals'


function MyApp({ Component, pageProps }: AppProps) {
  const [ theme, setTheme ] = React.useState(DarkTheme)

  React.useEffect(() => {
    const themeStorage = cookie.get('theme')
    if (!themeStorage) cookie.set('theme', 'dark')
    
    setTheme(() => (themeStorage === 'light') ? LightTheme : DarkTheme)

  }, [])

  React.useEffect(() => {
    cookie.set('theme', theme.title)
  }, [ theme ])

  const SwitchTheme = () => {
    setTheme(theme => theme.title === 'dark' ? LightTheme : DarkTheme)
  }

  return (
    <SwitchThemeContext.Provider value={{ SwitchTheme }}>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SwitchThemeContext.Provider>
  )
}
export default MyApp
