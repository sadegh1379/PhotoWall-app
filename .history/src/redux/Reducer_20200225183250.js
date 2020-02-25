import {ADD_POST , DELETE_POST } from './Type';

const posts = {
    pos
}
    {
      id : "0" ,
      description : "صادق اکبری" ,
      imageLink : "https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/tpWy09V5tfN_Il2UBj8nPU4FZvPDpNBQSecbyXiqbuM/1574345660/public/styles/322x405/public/media/int_files/1008357.jpg?itok=c5qoLzeh"
    },
    {
     id : "1" ,
     description : "علی میرزایی" ,
     imageLink : "https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/tpWy09V5tfN_Il2UBj8nPU4FZvPDpNBQSecbyXiqbuM/1574345660/public/styles/322x405/public/media/int_files/1008357.jpg?itok=c5qoLzeh"
   }
   ,{
     id : "2" ,
     description :" سارا ممبینی" ,
     imageLink :"https://thetyee.ca/Culture/2017/10/31/FawnLawn.jpg"
   
   },
   {
    id : "3" ,
    description : "صادق اکبری" ,
    imageLink : "https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/tpWy09V5tfN_Il2UBj8nPU4FZvPDpNBQSecbyXiqbuM/1574345660/public/styles/322x405/public/media/int_files/1008357.jpg?itok=c5qoLzeh"
  }
 
  ]

const postReducer = (state = posts , action)=>{
    switch (action.type) {
        case ADD_POST :
            return{
               
             posts :  [
                  ...state , {
                      id:action.payload.post.id,
                      description:action.payload.post.description,
                      imageLink : action.payload.post.imageLink
                  }
             ]
            }

        case DELETE_POST :
                
                return[...state.slice(0 , action.payload.id) , ...state.slice(action.payload.id + 1)]
            
    
        default:
           return state ;
    }
}

export default postReducer; 