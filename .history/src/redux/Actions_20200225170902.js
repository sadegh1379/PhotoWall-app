import {ADD_POST , DELETE_POST} from './Type';

export const addPost = (post) =>{
    return{
        type : ADD_POST , 
        payload : {
            id: post.id
            description : post.de
            imageLink : 
        }
    }
}

export const deletePost = (id) =>{
    return{
        type : DELETE_POST , 
        payload : {
            id : id
        }
    }
}