import {createGlobalStyle} from 'styled-components';

const GlobalCss = createGlobalStyle`
  body {
      max-height:  100vh;
      height: 100vh;
      font-family: 'Baloo Da 2', cursive;
      padding: 0;
      box-sizing : border-box;
      width: 100%;
      margin: 0 auto;
  }
`;
export default GlobalCss;


const sizes = {
  mobile : '478px',
  tablet : '768px',
  desktop_small : '1024px',
  desktop_full : '1424px'
}

export const device = {
  mobile : (styles) => {
      return `@media (min-width : ${sizes.mobile}) {
         ${styles}
      }`
  },
  tablet : (styles ) => {
      return `@media (min-width : ${sizes.tablet}) {
         ${styles}
      }`
  },
  desktop_small : (styles ) => {
      return `@media (min-width : ${sizes.desktop_small}) {
         ${styles}
      }`
  },
  desktop_full : (styles ) => {
    return `@media (min-width : ${sizes.desktop_full}) {
       ${styles}
    }`
}

}

