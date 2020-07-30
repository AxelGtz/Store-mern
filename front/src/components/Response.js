import React from 'react';
import styled,{keyframes} from 'styled-components';
import {connect} from 'react-redux';

const Bye = keyframes`
  0% {
      opacity : 0;
  }

  50% {
      opacity : 1;
  }
  75% {
      opacity : .5;
  }
  100% {
      opacity : 0;
  }
`;
const MessageError = styled.p`
 color: white;
 margin: 0;
 padding : 1rem;
 background: #f7826d;
 font-size: 1rem;
 text-align: center;
 animation : ${Bye} 8s ease alternate ;
`
const MessageSuccess = styled.p`
 color: white;
 padding : 1rem;
 background: green;
 font-size: 1rem;
 text-align: center;
 animation : ${Bye} 8s ease alternate ;
`


const Response = ({UI}) => {
   return (
         <>
         {UI.success && <MessageSuccess> {UI.message} </MessageSuccess>}
           {UI.error && <MessageError> {UI.message} </MessageError>}
         </>
       )
}

const mapToStateToProps = (state) => {
    return {
        UI : state.UIReducer,
    }
}
export default connect(mapToStateToProps)(Response);