import React from 'react';
import './bootswatch.css';
import './App.css';
import Title from './Component/Title';
import PhotoWall from './Component/PhotoWall';

function App() {

  constru
 const posts = [
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
    id : "5" ,
    description :" سارا ممبینی" ,
    imageLink :"https://thetyee.ca/Culture/2017/10/31/FawnLawn.jpg"
  
  }
 ]
  return (
    <div className="body">
     
            <Title title="گالری عکس"/>
            
            <PhotoWall posts={posts}/>
            
     
    </div>
  );
}

export default App;
