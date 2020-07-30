import React from 'react';
import styled from 'styled-components';

const StyleddButton = styled.button`
     background : ${(props) => props.bg || 'blue'};
    margin: 1rem auto;
    display: inline-block;
    font-size: 1rem;
    color: white;
    font-family: "Baloo Da 2", cursive;
    border: none;
    padding: 0.5rem 2rem;
    text-decoration: none;

    :disabled{
      background: gray;
    }
  `;
const Button  = ({children,bg,onClick, emailValid}) => {
  return (
      <StyleddButton bg={bg} onClick={onClick} disabled={!emailValid} >
          {children}
      </StyleddButton>
  )
}

export default Button;