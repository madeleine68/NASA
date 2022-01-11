import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 5vw;
    
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
  h1{
      font-size: 3vw;
      color:#7F7C82;
  }
  p{
      font-size: 2vw;
      color:#8F7C82;
      line-height: 1.6;
      text-align: justify;
  }
`
