import React from "react";
import Form from "./Form";
import history from '../../utils/history';
import Button from '../Button';
import {AiOutlineMail,AiFillLock} from 'react-icons/ai';
import { connect } from 'react-redux';
import {Login} from '../../redux/actions/AuthUser.action';
import { Redirect} from "react-router-dom";
import Loading from '../Loading';
import Response from '../Response'

const SignIn = ({UI,User,dispatch}) => {
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  
  const handleSubmit = () => {
      dispatch(Login(email,password))
  }
  const handleRegister = () => {
     history.push('/signup')
     window.location.reload(true)
  }
  return (
  <>
   {UI.loading ? <Loading/> :
  <Form>
      {(User.authenticated) && <Redirect to="/home" />}
      <section>
        <h3> Welcome! </h3>
        <h5> A tu tienda favorita! </h5>
      </section>
      
      { (UI.error) && <Response/> }
      
      <section>
        <div className="input-control">
        <AiOutlineMail  size={20} className="icon"/>
        <input placeholder="Correo electronico" 
        type="email" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
        </div>
        
        <div className="input-control">
        <AiFillLock size={20} className="icon"/>
        <input placeholder="Password" 
        type="password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
        </div>
        <p> Olvidé la contraseña </p>
      
      </section>
      
      <span className="buttons">
        <Button bg='#FFC100'
        onClick={handleSubmit}
        emailValid= {true}
        > Signin </Button>
      <Button  emailValid= {true} bg='#93fc83'
       onClick={handleRegister}> signup </Button>
       </span>
    </Form>
     }
    </>
  );
};

const mapStateToProps = (state) => {
 return {
    UI : state.UIReducer,
    User : state.AuthUser
}
}


export default connect(mapStateToProps)(SignIn);
