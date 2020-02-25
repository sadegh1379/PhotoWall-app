import posts from '../data/posts';
import {ADD_POST , DELET_POST } from './Type';

const postReducer = (state = posts , action)=>{
    switch (action.type) {
        case A :
            return{
               posts :  state   
            }
            
    
        default:
           return state ;
    }
}

export default postReducer; 