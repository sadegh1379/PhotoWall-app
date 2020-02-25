import {ADD_PHOTO , DELETE_PHOTO} from './Type';

export const addPhoto = (post) =>{
    return{
        type : ADD_PHOTO , 
        payload : post
    }
}

export const delete = (post) =>{
    return{
        type : ADD_PHOTO , 
        payload : post
    }
}