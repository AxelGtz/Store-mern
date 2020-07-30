import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AiOutlineMail, AiFillLock, AiOutlineArrowLeft } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import {Signup} from '../../redux/actions/AuthUser.action';
import Response from "../Response";
import { SET_ERROR, CLEAR_UI } from "../../redux/types";
import Button from '../Button';

const SignUp = ({ UI, dispatch }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [re_password, set_rePassword] = React.useState('');
  const [emailValid, setEmailValid] = React.useState(false);

  const validEmail = (e) => {
     setEmail(e.target.value);
     const auxiliar = (e.target.value);
      
    if(auxiliar.includes('@hotmail.com') | auxiliar.includes('@gmail.com')) {
      setEmailValid(true); 
    }else{
     setEmailValid(false) 
    }
    }
  
  const handleSubmit = () => {
     const data = {email,password,name};
      if(password === re_password){
        dispatch(Signup({data : data}));
        }else {
          dispatch({
            type : SET_ERROR,
            payload : {
              message : "passwords diferents"
            }
          })
          setTimeout(()=>{
            dispatch({
              type : CLEAR_UI 
            })
          },5000) 
        }
  };
  
return (
    <>
   <Form>
      <Link to="/signin" className="back">
        <AiOutlineArrowLeft size={30} color={"black"} />
      </Link>
      <section>
        <h3> Registrate!! </h3>
        <h5> Envios gratis!! </h5>
      </section>
      {UI.error && <Response />}
      {UI.success && <Response />}
      <section>
        <div className="input-control">
          <GoPerson className="icon" size={20} />
          <input
            value={name}
            placeholder="your name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-control">
          <AiOutlineMail className="icon" size={20} />
          <input
            placeholder="email"
            type="email"
            value={email}
            onChange={validEmail}
          />
        </div>
        <div className="input-control">
          <AiFillLock className="icon" size={20} />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) =>  setPassword(e.target.value)}
          />
        </div>

        <div className="input-control">
          <AiFillLock className="icon" size={20} />
          <input
            value={re_password}
            placeholder="re-password"
            type="password"
            onChange={(e) => set_rePassword(e.target.value)}
          />
        </div>
      </section> 
      <Button   
      emailValid={emailValid}
      bg='#93fc83'
      onClick={handleSubmit}>
        Signup
      </Button>
    </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    UI: state.UIReducer,
  };
};

export default connect(mapStateToProps)(SignUp);
