import React from 'react';
import './bootswatch.css';
import './App.css';
import Title from './Component/Title';
import PhotoWall from './Component/PhotoWall';

class App extends Component {

  constructor(){
    this.state = {
      
    }
  }
  return (
    <div className="body">
     
            <Title title="گالری عکس"/>
            
            <PhotoWall posts={posts}/>
            
     
    </div>
  );
}

export default App;
