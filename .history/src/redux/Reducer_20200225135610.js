import posts from '../data/posts';

const postReducer = (state = posts , action)=>{
    switch (action.type) {
        case 'ADDPHOTO':
            return{
                post : [...state , {act}]  
            }
            
    
        default:
           return state ;
    }
}

export default postReducer; 