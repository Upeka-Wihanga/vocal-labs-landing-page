import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: rgba(2, 6, 23, 0.95); /* Match the background color of the sections */
        color: ${({ theme }) => theme.colors.text};
        line-height: 1.5;
        overflow-x: hidden;
    }

    #root {
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1 0 auto;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
        font-family: inherit;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    /* Custom scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.backgroundLight};
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colors.secondary};
    }

    /* Remove blue highlight on mobile tap */
    -webkit-tap-highlight-color: transparent;

    /* Better font rendering */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    nav {
        background: rgba(10, 10, 20, 0.9); /* Ensure the navbar has the correct background color */
    }
`;