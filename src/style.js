import { createGlobalStyle } from 'styled-components';
import Background from './images/background.jpg';

const Globalstyle = createGlobalStyle`
*,::before,::after{
    box-sizing:border-box;
    border-width:0;
    border-style:solid;
    border-color:theme('borderColor.DEFAULT','currentColor');
}

::before,::after{--tw-content:''}

html {
    line-height:1.5;
    -webkit-text-size-adjust:100%;
    -moz-tab-size:4;
    tab-size:4;
    font-family:theme('fontFamily.sans',ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","Noto Serif",serif,);
    font-size: 62.5%;
    }

body {
    margin:0;
    line-height:inherit;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 1.6rem;
    color: #000;
    line-height: 1.5;
    overflow-x: hidden;
    background: url(${Background}) no-repeat center 0;

  &::-webkit-scrollbar-track {
    background: #eee;
  }

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background: #999;
  }
}

hr {
    height:0;
    color:inherit;
    border-top-width:1px;
}

abbr:where([title]){
    text-decoration:underline dotted;
}

address, em, i {
    font-style: normal;
}

h1, h2, h3, h4, h5, h6 {
    font-size:inherit;
    font-weight:inherit;
}

a {
    color:inherit;
    text-decoration:inherit;
}

b, strong {
    font-weight:bolder;
}

code, kbd, samp, pre {
    font-family:theme('fontFamily.mono',ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);
    font-size:1em;
}

small {
    font-size:80%;
}

sub, sup {
    font-size:75%;
    line-height:0;
    position:relative;
    vertical-align:baseline;
}

sub {
    bottom:-0.25em;
}

sup {
    top:-0.5em;
}

table {
    text-indent:0;
    border-color:inherit;
    border-collapse:collapse;
}

button, input, optgroup, select, textarea {
    font-family:inherit;
    font-size:100%;
    line-height:inherit;
    color:inherit;
    margin:0;
    padding:0;
}

button, select {
    text-transform:none;
}

button, [type='button'], [type='reset'], [type='submit'] {
    -webkit-appearance:button;
    background-color:transparent;
    background-image:none;
}

:-moz-focusring {
    outline:auto;
}

:-moz-ui-invalid {
    box-shadow:none;
}

progress {
    vertical-align:baseline;
}

::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height:auto;
}

[type='search'] {
    -webkit-appearance:textfield;outline-offset:-2px;
}

::-webkit-search-decoration {
    -webkit-appearance:none;
}
::-webkit-file-upload-button {
    -webkit-appearance:button;
    font:inherit;
}
summary {
    display:list-item;
}

blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
    margin:0;
}

fieldset {
    margin:0;
    padding:0;
}

legend {
    padding:0;
    display:none;
}

ol, ul, menu {
    list-style:none;
    margin:0;
    padding:0;
}

textarea {
    resize:vertical;
}

input::placeholder, textarea::placeholder {
    opacity:1;
    color:theme('colors.gray.400',#9ca3af);
}

button, [role="button"] {
    cursor:pointer;
}
    :disabled {
    cursor:default;
}

img, svg, video, canvas, audio, iframe, embed, object {
    display:block;
    vertical-align:middle;
}

img, video {
    max-width:100%;
    height:auto;
}

[hidden] {
    display:none;
    }

.inner {
    width: 62.5%;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .inner {
      width: 92.187%;
    }
  }

  @media (max-width: 768px) {
    .inner {
      width: 94.791%;
    }
  }
`;

export default Globalstyle;
