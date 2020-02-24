import React , { Component } from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Title from './Component/Title';
import PhotoWall from './Component/PhotoWall';
import './bootswatch.css';
import AddPhoto from './Component/AddPhoto';
import './App.css';

class App extends Component {

  constructor(){
    
      super()

      this.state = {
        posts : [
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
        },
       
        ]
      
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
  console.log(new Date().g);
      return (
        <div className="body">
              <Router>
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
            </Router>
        </div>
      );
}
}

export default App;
