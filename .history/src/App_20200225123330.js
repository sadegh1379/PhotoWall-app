import React , { Component } from 'react';
import {  Route, Switch } from 'react-router-dom';
import Title from './Component/Title';
import PhotoWall from './Component/PhotoWall';
import './bootswatch.css';
import AddPhoto from './Component/AddPhoto';
import './App.css';

class App extends Component {

  constructor(){
    
      super()  
    }
  }

// Remove post
 onRemovePost = (removedPost) =>{
        
      this.setState((state)=>({
          posts : state.posts.filter(post => post !== removedPost)
      }))
    
  }

  // Add post
  AddPostHandler = (post)=>{
    let preState = this.state.posts;
    let newState =preState.push( { id: preState.length +1 , description : post.description , imageLink : post.imageLink });

    this.setState({
        post : newState
    })
  }

  render(){
  
      return (
        <div className="body">
              
                  <Title title="گالری عکس"/>
                  <Switch>
                    
                      <Route exact path="/" render={()=>(
                              <div>
                                  <PhotoWall onRemovePost={this.onRemovePost} posts={this.state.posts}/>
                              </div>
                      )}/>
                        
                        <Route exact path="/addphoto" render={(props)=>(
                          
                          <AddPhoto {...props} AddPostHandler={this.AddPostHandler}/>
                        )}/>
                </Switch>
            
        </div>
      );
}
}

export default App;
