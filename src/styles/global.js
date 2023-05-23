import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${({ theme }) => theme.FONTS.LIGHT_SURFACE_VARIANT};
        color: ${({ theme }) => theme.FONTS.TEXT_COLOR};
        -webkit-font-smoothing: antialiased;
    }
    body, button, textarea, input {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        outline: none;
    }
    a {
        text-decoration: none;
    }
    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }
    button:hover, a:hover {
        filter: brightness(0.9);
    }
`