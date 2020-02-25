import posts from '../data/posts';
import {ADD_POST , DELET_POST } from './Type';

const postReducer = (state = posts , action)=>{
    switch (action.type) {
        case ADD_POST :
            return{
               posts :  state   
            }
        case DELET_POST :
                console.log(action.payload.id)
            
    
        default:
           return state ;
    }
}

export default postReducer; 