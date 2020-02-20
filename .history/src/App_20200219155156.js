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
    imageLink :"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fwallpapers%2Fanimals&psig=AOvVaw0_-l_P54AxGWrys8ky_-lR&ust=1582197906718000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMig6dTA3ecCFQAAAAAdAAAAABAP"
  }
 ]
  return (
    <div className="">
     
            <Title title="گالری عکس"/>
            <PhotoWall posts={posts}/>
            
     
    </div>
  );
}

export default App;
