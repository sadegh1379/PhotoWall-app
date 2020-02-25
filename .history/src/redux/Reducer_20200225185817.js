import posts from '../data/posts';
import {ADD_POST , DELETE_POST } from './Type';

const postReducer = (state = posts , action)=>{
    switch (action.type) {
        case ADD_POST :
            return[
                ...state , {
                    id:action.payload.post.id,
                    description:action.payload.post.description,
                    imageLink : action.payload.post.imageLink
                }
            ]
               [
                 
             ]
            }

        case DELETE_POST :
                
                return[...state.slice(0 , action.payload.id) , ...state.slice(action.payload.id + 1)]
            
    
        default:
           return state ;
    }
}

export default postReducer; 