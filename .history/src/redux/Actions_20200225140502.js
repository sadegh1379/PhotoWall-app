import {ADD_POST , DELETE_POST} from './Type';

export const addPhoto = (post) =>{
    return{
        type :  , 
        payload : post
    }
}

export const deletePhoto = (post) =>{
    return{
        type : DELETE_PHOTO , 
        payload : post
    }
}