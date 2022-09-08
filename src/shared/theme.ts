import { ThemeProps } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const theme = {
    fonts: {
        basic: 'helvetica, sans-serif',
    },
    colors: {
        green: '#A9ED33',
        blue: '#69C8FF',
        orange: '#FF8E25',
        red: 'hsl(100,100%,70%)',
        white: '#FFFFFF',
        black: '#000000',
        gray: '#696969',
        darkBlue: '#2C3E50',
        mainBg: '#8B8D8BFB',
    },
    breakpoints: {
        mobile: '576px',
        tablet: '768px',
        desktop: '1024px',
        desktopL: '1280px',
    },
    fontSizes: {
        small: '1.2rem',
        medium: '1.6rem',
        large: '2.4rem',
    },
}

export type MainThemeProps = ThemeProps<typeof theme>
export const GlobalStyle = createGlobalStyle<MainThemeProps>`
  *,*::before, *::after, #root { 
    box-sizing: border-box;
    margin: 0;
    padding:0;
    width: 100%;
    height: 100%;
  };
  html {
    scroll-behavior:smooth;
    font-size: 10px;
  }
  body {
    box-sizing: inherit;
    font-family: ${({ theme }) => theme.fonts.basic};
    background-color: ${({ theme }) => theme.colors.blue};
  }
  a {
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: none;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.green}
  };
  ol, ul {
    list-style-type: none;
  }
`
