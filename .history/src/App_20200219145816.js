import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Title from './Component/Title';
import List from './Component/List';
import PhotoWall from './Component/'

function App() {
 const posts = [
   {
     id : "0" ,
     description : "sadegh akbari" ,
     imageLink : "https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/tpWy09V5tfN_Il2UBj8nPU4FZvPDpNBQSecbyXiqbuM/1574345660/public/styles/322x405/public/media/int_files/1008357.jpg?itok=c5qoLzeh"
   },
   {
    id : "1" ,
    description : "ali  mirzaei" ,
    imageLink : "https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/tpWy09V5tfN_Il2UBj8nPU4FZvPDpNBQSecbyXiqbuM/1574345660/public/styles/322x405/public/media/int_files/1008357.jpg?itok=c5qoLzeh"
  },
  {
    id : "2" ,
    description : "amir khazaei" ,
    imageLink : "https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/tpWy09V5tfN_Il2UBj8nPU4FZvPDpNBQSecbyXiqbuM/1574345660/public/styles/322x405/public/media/int_files/1008357.jpg?itok=c5qoLzeh"
  }
 ]
  return (
    <div className="text-center">
     
            <Title title="گالری عکس"/>
            <PhotoWall />
            
     
    </div>
  );
}

export default App;
