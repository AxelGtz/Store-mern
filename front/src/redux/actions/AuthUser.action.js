import {SET_LOADING,SET_AUTHENTICATED,
    SET_ERROR,SET_UNAAUTHENTICATED, 
    CLEAR_UI, SET_SUCCESS , SET_USUARIO} from '../types';
import history from '../../utils/history';


export const Login = (email,password) => (dispatch) => {
    dispatch({type :  SET_LOADING })
 
    fetch('http://localhost:4000/cellphone/user/signin', {
        method: 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
            email,password
        })
    }).then(res => res.json())
    .then(data => {
        if(data.token){
            localStorage.setItem('token', data.token)
            dispatch({type : SET_AUTHENTICATED})
            dispatch(GetUser())
        }else if(data.message){
          dispatch({
              type : SET_ERROR,
              payload : {
                 message : data.message
              }
          })
        }
        setTimeout(() => {
            dispatch({
                type : CLEAR_UI
            })
          },3000)
    })

}
export const Logout = () => (dispatch) => {
    const token = localStorage.getItem('token');

    if(token){
        dispatch({
            type : SET_UNAAUTHENTICATED
        })
        localStorage.removeItem('token')
        history.push('/signin')
    }
}
export const Signup = ({data}) => (dispatch) => {
    const {email,password,name} = data;

    dispatch({ type : SET_LOADING})
    fetch('http://localhost:4000/cellphone/user/signup', {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
            name, password,email
        })
    }).then(response => response.json())
    .then(data => {
        if(data.status === 'success'){
            dispatch({
                type : SET_SUCCESS,
                payload : {
                    message : data.message
                }
            })
            setTimeout(() => {
                history.push('signin')
            },5000)

        }else if(data.status === 'failed') {
            dispatch({
                type : SET_ERROR,
                payload : {
                    message : data.message
                }
            })
        }
    
      return setTimeout(() => {
        dispatch({
            type : CLEAR_UI
        })
      },6000)
    })
}
export const GetUser = () => (dispatch) =>{
    fetch('http://localhost:4000/cellphone/user/whomy',{
        headers : { Authorization : `Bearer ${localStorage.getItem('token')}`},
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === 'success'){
            dispatch({
                type : SET_USUARIO,
                payload : {
                    user : data.User
                }
            })
            
        }else if(data.status === 'failed') {
            dispatch({
                type : SET_ERROR,
                payload : {
                    message : data.message
                }
            })
        }
})
}
