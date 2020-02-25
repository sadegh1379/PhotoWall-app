import posts from '../data/posts';
impor
const postReducer = (state = posts , action)=>{
    switch (action.type) {
        case :
            return{
               posts :  state   
            }
            
    
        default:
           return state ;
    }
}

export default postReducer; 