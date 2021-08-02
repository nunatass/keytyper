import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  #root {

    // fonts
    font-family: Mulish,Arial,sans-serif;
    font-size: 62.5%;
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&family=Roboto:wght@400;700&family=Ubuntu+Mono:wght@400;700&display=swap');

    font-family: 'Ubuntu Mono' 'Roboto' 'Roboto Mono' ;
    // colors
    --bg-color: #eee7e6;
    --primary-color: #324554;
    --text-color: #26243ab3;
    --border-color: #d6d0d0;
    --input-not-focus-color: #898686;


    --taxes-decreases-color: #a1464e;
    --taxes-increases-color: #68a162;


    --keyboard-bg-color: #324554;
    --keyboard-special-key-color: #e3e3e1;
    --keyboard-key-color: #efefee;
    --keyboard-key-symbol-color: #12121e;

    

  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-collapse: collapse;

  }


  @-webkit-keyframes blink {
    0% {color: white}
    50% {background: black}
    100% {color: white}
  }
`;

export default GlobalStyle;
