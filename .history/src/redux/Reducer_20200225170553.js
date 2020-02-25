import posts from '../data/posts';
import {ADD_POST , DELETE_POST } from './Type';

const postReducer = (state = posts , action)=>{
    switch (action.type) {
        case ADD_POST :
            return{
               
               [
                  ...state , 
                {
                id : action.payload.id ,
                description : action.payload.description ,
                imageLink : action.payload.imageLink
                } ]  
            }

        case DELETE_POST :
                console.log(`Post ${action.payload.id} deleted`);
                return[...state.slice(0 , action.payload.id) , ...state.slice(action.payload.id + 1)]
            
    
        default:
           return state ;
    }
}

export default postReducer; 