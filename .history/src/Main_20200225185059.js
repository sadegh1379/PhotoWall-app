import App from './App';
import { connect } from 'react-redux';
import {deletePost , addPost} from './redux/Actions';
import { withRoute } from 'react-router';

const mapStateToProps = (state)=>{
    return{
        posts : state.po
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        removePost : (id)=>dispatch(deletePost(id)),
        
        
    }
 }


export default connect(mapStateToProps , mapDispatchToProps)(App);