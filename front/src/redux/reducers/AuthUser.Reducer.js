import {SET_AUTHENTICATED,SET_UNAAUTHENTICATED,SET_USUARIO} from '../types';

const INITIAL_STATE = {
    authenticated : false,
    credential : {}
}

function AuthUser (state = INITIAL_STATE, action) {
    switch(action.type){
        case SET_AUTHENTICATED : 
            return {
                ...state,
                authenticated : true
            }
        case SET_UNAAUTHENTICATED :{
            return INITIAL_STATE
        }
        
        case SET_USUARIO : {
            return{
              ...state,
              credential : action.payload.user
            }
        }
        
        default :
        return state;
        
    }
}

export default AuthUser;