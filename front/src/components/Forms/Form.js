import React from "react";
import styled from "styled-components";
import { device } from "../../global/globalcss";
import FreeShip from "../../static/freeShip.png";

const StyledLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 550px;
    width: 100%;
    img {
      display: none;
    }

  ${device.desktop_small(`
    position: relative; 
    top: -20px;
    width: 80%;
    margin: 0 auto;
    img {
       display:block;
      width: 50%;
    }
  `)}
  ${device.desktop_full(`
    top : 80px;
  `)}
`;

const StyledForm = styled.form`
  box-shadow: 1px 1px 3px #000000;
  text-align: center;
  border-radius: 0.5rem;
  width: 100%;
  position: relative;
  top: 2rem;
  section h3 {
    color: #222f35;
    margin: 0px;
    font-size: 2rem;
  }
  section h5 {
    margin: 0px;
    font-size: 1.5rem;
    color: #ffc100;
  }
  section p {
    text-align: right;
    margin: 0.4rem;
    position: relative;
    top: -23px;
    margin-top: 1rem;
  }
  section input {
    text-align: center;
    display: inline-block;
    margin: 0.6rem auto;
    margin-right: 1rem;
    padding: 0.9rem;
    width: 82%;
    border: 1px solid #b9b9b9;
    border-radius: 0.3rem;
    font-size: 1rem;
    :focus {
      border: 1px solid #ffc100;
    }
  }

  .input-control {
    display: block;
  }
  .icon {
    position: relative;
    left: 30px;
    bottom: -5px;
  }
  .back {
    position: absolute;
    left: 20px;
    top: 10px;
  }

  ${device.desktop_small(`
     padding: .8rem;
     width: 40%;
     position:relative;
     top: 20px;
   `)}
  ${device.desktop_full(`
     width: 30%;
   `)}
`;

const Form = ({ children }) => {
  return (
    <StyledLayout>
      <StyledForm
        encType="multipart/form-data"
        onSubmit={(e) => e.preventDefault()}
      >
        {children}
      </StyledForm>
      <img src={FreeShip} alt="free_ship" />
    </StyledLayout>
  );
};

export default Form;
