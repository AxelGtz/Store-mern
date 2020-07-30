import React from 'react';
import styled, {keyframes} from 'styled-components';
import {device} from '../../global/globalcss';
import {AiFillFacebook,AiFillInstagram,AiFillLinkedin} 
from 'react-icons/ai';
import {Link} from 'react-router-dom';
import AddCart from '../../static/addCart.png';

const Animation = keyframes`
    from {
        left: -2000px;
        transform :rotate(50deg);
    }
    to {
        left : 0px;
        transform :rotate(0deg);
    }
`;

const Layout = styled.div` 
position : relative;
z-index: 1;
text-align:center; 
margin: 0 auto;
animation: ${Animation} 2s ease-in-out ;
 img {
     width: 100%;
 }
 section h3 {
     color : #263238;
     font-size : 50px;
 }
 section button {
    font-family: 'Baloo Da 2', cursive;
     background : #FFC100;
     font-size: 1.3rem;
     border : none;
     color : white;
     padding : 0.5rem 2.5rem;
     border-radius: 5rem;
     margin-bottom: 3rem;
     :focus{
         outline: none;
     }
 }
 .btn_link{
     padding : 1rem;
     border : none;
     background: transparent;
     color: #263238;
 }
 .online_shop{
     color : #FFC100;
     font-size : 3.7rem;
     padding : 0px;
     margin : 0px;
 }
 .slogan{
     width: 100%;
 }
 ${device.tablet(`
  .foto {
      order: 2;
  }
  .slogan {
      position: relative;
      order : 1;
    }
  `)}

 ${device.desktop_small(`
   display : flex;
   align-items: center;
   width: 90%;
   position:relative;
   top:-25px;
   img {
       width: 85%
   }
   footer{
      display:grid;
      order: 0;
      position:relative;
      bottom : -270px;
      left: 70px;
      grid-template-columns: repeat(3,1fr)
  }
   section h3 {
       font-size : 30px;
   }
   .slogan {
       left: 50px;
   }
 `)}
 
 ${device.desktop_full(`
    top : 80px;
    footer {
        bottom : -350px;
    }
    img{
        width: 100%;
        position : relative;
        right: 100px;
        top: -60px;
    }
    .slogan{
        top : -100px;
    }
 `)}
 
`

 ;

const Home_noUser = () => {
    return (
        <Layout>
            <span className="foto">
           <img src={AddCart} alt="add cart" />
           </span>
           <section className="slogan">
               <h3> 
                    <span className="online_shop">ONLINE SHOP</span> <br/>
                   Buy from the confort of your home!
              </h3>
                <button> Go to shop </button>
           </section>
           <footer>
               <Link className="btn_link" to="/signin"> <AiFillFacebook size={30}/></Link>
               <Link className="btn_link" to="/signin"> <AiFillInstagram size={30}/></Link>
               <Link className="btn_link" to="/signin"> <AiFillLinkedin size={30}/></Link>
           </footer>
           
        </Layout>
    );
}
 
export default Home_noUser;