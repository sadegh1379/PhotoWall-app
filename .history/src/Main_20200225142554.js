import App from './App';
import { connect } from 'react-redux';
import {deletePost} from './redux/Actions';

const mapStateToProps = (state)=>{
    return{
        posts : state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        removePost : (id)=>dispatch(de)
    }
 }


export default connect(mapStateToProps , mapDispatchToProps)(App);