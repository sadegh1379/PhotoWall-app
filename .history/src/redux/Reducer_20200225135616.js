import posts from '../data/posts';

const postReducer = (state = posts , action)=>{
    switch (action.type) {
        case 'ADDPHOTO':
            return{
                post : [...state , {action.payload}]  
            }
            
    
        default:
           return state ;
    }
}

export default postReducer; 