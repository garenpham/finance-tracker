import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  :root{
    --primary-color: #222260;
    --primary-color2: rgba(34, 34, 96, .6);
    --primary-color3: rgba(34, 34, 96, .4);
    --primary-color4: rgba(34, 34, 96, .9);
    --primary-color5: rgba(34, 34, 96, .1);
    --primary-box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    --primary-border: 2px solid #fff;
    --color-green: #42ad00;
    --color-gray: #aaa;
    --color-accent: #f56692;
    --color-delete: #ff0000;
  }

  body{
    font-family: 'Nunito', sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    overflow: hidden;
    color: var(--primary-color2);
  }
  
  h1,h2,h3,h4,h5,h6 {
    color:var(--primary-color);
  }
`;
