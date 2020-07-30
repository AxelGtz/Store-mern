import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';
import {device} from '../global/globalcss';
import {FiMenu} from 'react-icons/fi';
import {GrFormClose} from 'react-icons/gr';

const Buble = keyframes`
   from {
    opacity: 0%;
   }
   to {
     opacity: 100%;
   }
`;
const Bye = keyframes`
from {
  opacity: 100%;
}
to {
  opacity: 0%;
}
`;

const HeadStyle = styled.header` 
   width: 100%;
   margin : 0 auto;
   text-align: center;
  .STORE{
       color : #FFC100;
       font-size: 40px;
      text-decoration: none;
   }
   ${device.tablet(`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `)}
    ${device.desktop_small(`
     width: 80%;
    `)}
  `;
const Lista = styled.div`
      z-index: 2;
      position: absolute;
      height: 92vh;
      width: 100%;
      background: #FFC100;
      display:${props => props.display || 'none'};
      animation : ${props => props.animation} 1s ease-in-out;
      flex-direction:column;
      justify-content: center;
     .link{
        color : white;
        font-size: 2rem;
        text-decoration: none;
        :focus{
          background: white;
          color: #FFC100;
        }
      }
      .x{
      color:white;
      position: relative;
      right:0px;
      top: -150px;
      }
      ${device.tablet(`
       top : 50px;
      `)}
      ${device.desktop_small(`
        height: 90vh;
        width: 30%;
        top : 50px;
        right: 0px;
    `)}
     ${device.desktop_full(`
       .x{
         top: -300px;
       }
     `)}
  `;

const Header = () => {
  const [estado, setEstado] = React.useState('');
  const [animation, setAnimation] = React.useState(Buble);
  
  function closeMenu () {
   setAnimation(Bye);
   setTimeout(() => {
    setEstado('none');
    setAnimation(Buble)
   },1000);
  }

  return ( 
    <HeadStyle>
        <section>
           <Link className="STORE" to="/home_prueba"> STORE </Link>
         </section> 
       
         <span>
            <FiMenu size={30} color={'#FFC100'}
             onClick={() => setEstado('flex') }/>
        </span>
          <Lista display={estado}
           animation={animation}
          >
          <GrFormClose className="x" onClick={closeMenu} size={30}/>
            <Link className="link" onClick={closeMenu} to="/home_prueba"> HOME </Link>
            <Link className="link" onClick={closeMenu} to="/home"> SHOP </Link>
            <Link className="link" onClick={closeMenu} to="/home"> CONTACT </Link>
            <Link className="link" onClick={closeMenu} to="/signin"> LOGIN </Link>
            </Lista>  
    </HeadStyle>
    )
}

export default Header;