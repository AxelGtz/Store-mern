import {SET_ERROR,SET_LOADING, CLEAR_UI, SET_SUCCESS} from '../types';

const INITIAL_STATE = {
    error : false,
    success : false,
    message : '',
    loading : false
}

function UIReducer (state = INITIAL_STATE, action) {
     switch(action.type) {
        case SET_LOADING : {
           return { loading : true }
        }
        case SET_ERROR : {
            return {
                ...state,
                error: true,
                message : action.payload.message,
                loading : false
            }
         }
        case CLEAR_UI : {
            return {  
               INITIAL_STATE
            } 
         }

        case SET_SUCCESS :{
           return {
              ...state,
              success : true,
              message: action.payload.message
           }
        }
         

        default :
        return state;
     }
}


export default UIReducer;