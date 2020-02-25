import {ADD_POST , DELETE_} from './Type';

export const addPhoto = (post) =>{
    return{
        type : ADD_PHOTO , 
        payload : post
    }
}

export const deletePhoto = (post) =>{
    return{
        type : DELETE_PHOTO , 
        payload : post
    }
}