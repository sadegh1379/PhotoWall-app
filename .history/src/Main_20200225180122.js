import App from './App';
import { connect } from 'react-redux';
import {deletePost , addPost} from './redux/Actions';
import { withRoute } from 'react-router'

const mapStateToProps = (state)=>{
    return{
        posts : state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        removePost : (id)=>dispatch(deletePost(id)),
        addPost : (post)=>dispatch(addPost(post))
        
    }
 }


export default withRoute(connect(mapStateToProps , mapDispatchToProps)(App));