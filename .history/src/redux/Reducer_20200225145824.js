import posts from '../data/posts';
import {ADD_POST , DELETE_POST } from './Type';

const postReducer = (state = posts , action)=>{
    switch (action.type) {
        case ADD_POST :
            return{
               posts :  state   
            }

        case DELETE_POST :
                return[...state.slice(0 , action.payload.id , )]
            console.log(`Post ${action.payload.id} deleted`);
    
        default:
           return state ;
    }
}

export default postReducer; 