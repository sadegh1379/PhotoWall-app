import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Title from './Component/Title';
import List from './Component/List';

function App() {
  const users = [{
    name : "ali"
  },
{
     name : "reza"
},
{
  name : "hassan"
}]
  return (
    <div className="text-center">
     
            <Title title="my app"/>
            
            
     
    </div>
  );
}

export default App;
