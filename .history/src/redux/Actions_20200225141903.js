import {ADD_POST , DELETE_POST} from './Type';

export const addPhoto = (post) =>{
    return{
        type : ADD_POST , 
        payload : post
    }
}

export const deletePhoto = (id) =>{
    return{
        type : DELETE_POST , 
        payload : {
            
        }
    }
}