import posts from '../data/posts';
import {ADD_POST , DELETE_POST } from './Type';

const postReducer = (state = posts , action)=>{
    switch (action.type) {
        case ADD_POST :
            return{
               posts :  state   
            }
        case DELETE_POST :
                console.log(action.payload.id);
            
    
        default:
           return state ;
    }
}

export default postReducer; 