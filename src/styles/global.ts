import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
    }

    body {
        color: ${props => props.theme.color["gray-300"]};
        -webkit-font-smoothing: antialiased;
        background-color: ${props => props.theme.color["blue-dark"]};
    }

    body, input, textarea, button {
        font-family: "JetBrains Mono", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    body::-webkit-scrollbar {
        width: 0.5rem;
    }

    body::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.color["green-500"]};
        border-radius: 20px;
    }
`;