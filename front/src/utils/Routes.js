import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import {GetUser} from '../redux/actions/AuthUser.action';
import Header from '../components/Header';
import Home from '../components/Home';
import Home_noUser from '../components/Home/Home_noUser';
import SignIn from '../components/Forms/FormSignIn';
import SignUp from '../components/Forms/FormSignUp';
import { connect } from 'react-redux';
import GlobalCss from '../global/globalcss';


function Routes ({User,dispatch}) {
     React.useEffect(() => {
       if(localStorage.getItem('token')){  
      dispatch(GetUser())  
        dispatch({
          type: 'SET_AUTHENTICATED'
            })
          }      
      },[]);
     
    function CustomRoute ({isPrivate, ...rest}) {
      if(isPrivate && ! User.authenticated){
        return <Redirect to="/signin" />
        } else {
          return <Route {...rest} />
          }
    } 

    return (
        <> 
       <>
       <GlobalCss />
         <Header />
          <Switch>
           <CustomRoute exact path="/home_prueba" component={Home_noUser} />
           <CustomRoute isPrivate exact path="/home" component={Home} />
           <CustomRoute exact path="/signin" component={SignIn} />
           <CustomRoute exact path="/signup" component={SignUp} />
         </Switch>
        </> 
         </>
      )
}

const mapStateToProps = (state) =>{
    return {
        User : state.AuthUser
    }
}
export default connect(mapStateToProps)(Routes)


