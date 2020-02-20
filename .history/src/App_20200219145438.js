import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Title from './Component/Title';
import List from './Component/List';

function App() {
 const posts = [
   {
     id = "0" ,
     description : "sadegh akbari" ,
     
   }
 ]
  return (
    <div className="text-center">
     
            <Title title="my app"/>
            
            
     
    </div>
  );
}

export default App;
