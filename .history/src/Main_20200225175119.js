import App from './App';
import { connect } from 'react-redux';
import {deletePost , addPost} from './redux/Actions';

const mapStateToProps = (state)=>{
    return{
        posts : state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        removePost : (id)=>dispatch(deletePost(id)),
        addPost : (post)=>dispatch(addPost())
        
    }
 }


export default connect(mapStateToProps , mapDispatchToProps)(App);