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
           id : "5" ,
           description :" سارا ممبینی" ,
           imageLink :"https://thetyee.ca/Culture/2017/10/31/FawnLawn.jpg"
         
         },
         {
          id : "6" ,
          description : "صادق اکبری" ,
          imageLink : "https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/tpWy09V5tfN_Il2UBj8nPU4FZvPDpNBQSecbyXiqbuM/1574345660/public/styles/322x405/public/media/int_files/1008357.jpg?itok=c5qoLzeh"
        },
        {
         id : "7" ,
         description : "علی میرزایی" ,
         imageLink : "https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg?w=330&h=200&mode=crop&scale=both&v=20191213012337"
       }
       ,{
         id : "8" ,
         description :" سارا ممبینی" ,
         imageLink :"https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&w=1000&q=80"
       
       }
        ]
      
    }
  }

// Remove post
 onRemovePost = (removedPost) =>{
        
      this.setState((state)=>({
          posts : state.posts.filter(post => post !== removedPost)
      }))
    
  }

  render(){
      return (
        <div className="body">
              <Router>
                  <Switch>
                  <Route exact path="/" render={()=>{
                          <div>
                              <Title title="گالری عکس"/>
                              <PhotoWall onRemovePost={this.onRemovePost} posts={this.state.posts}/>
                          </div>
                        }}
                    
                      <Route exact path="/addphoto" component={AddPhoto}/>
                
            </Router>
        </div>
      );
}
}

export default App;
