import React from 'react';
import {connect} from 'react-redux';
import {Logout} from '../redux/actions/AuthUser.action';
import Loading from '../components/Loading';

const Home = ({User,UI,dispatch}) => {
    const handleClick = () => {
        dispatch(Logout())
    }
    return(
        <>
         {UI.loading ? <Loading/> :
         <>
        
        {(User.authenticated) && <> 
            
         {User.credential.name && <h1>Hola  {User.credential.name} </h1>} 
        <button onClick={handleClick}> Salir </button>
        </>
        }
       </>
      }
        </>
    )
}


const mapStateToProps = (state) => {
     return {
            UI : state.UIReducer,
            User : state.AuthUser
        }
}
export default connect(mapStateToProps)(Home)