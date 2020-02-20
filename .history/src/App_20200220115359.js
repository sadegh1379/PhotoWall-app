import React from 'react';
import './bootswatch.css';
import './App.css';
import Title from './Component/Title';
import PhotoWall from './Component/PhotoWall';

function App() {
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
  },
  {
    id : "2" ,
    description : "امیر خزایی" ,
    imageLink :"https://images.unsplash.com/photo-1526246708488-d433888791b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=428&h=214&q=60"
  },
  {
    id : "3" ,
    description : "امیر " ,
    imageLink :"https://images.unsplash.com/photo-1526246708488-d433888791b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=428&h=214&q=60"
  
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
