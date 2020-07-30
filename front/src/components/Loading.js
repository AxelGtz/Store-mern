import React from "react";
import styled, { keyframes } from "styled-components";
import { device } from "../global/globalcss";

const loader_animation = keyframes`
  to {
      opacity : 0.1;
      transform : translate3d(0,1rem,0); 
  }
`;

const Layout = styled.section`
  position: absolute;
  top: 40%;
  left: 30%;

  ${device.tablet(`
  left : 40%;
`)};

  ${device.desktop_small(`
  left:45%;
`)};
  .loader-animation {
    background: transparent;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
  .loader-animation > div {
    background: rgb(255,141,0);
    background: linear-gradient(90deg, rgba(255,141,0,1) 21%, rgba(255,193,0,1) 100%);
    width: 1.5rem;
    height: 1.5rem;
    margin: 1rem;
    border-radius: 50%;
    animation: ${loader_animation} 1s infinite alternate;
  }
  
  .loader-animation > div:nth-child(2) {
    animation-delay: 0.3s;
  }
`;
const Loading = () => (
  <Layout>
    <div className="loader-animation">
      <div> </div>
      <div> </div>
      <div> </div>
    </div>
  </Layout>
);
export default Loading;
