import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { theme } from './shared/theme'
import { GlobalStyle } from './shared/theme'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </StrictMode>
)
