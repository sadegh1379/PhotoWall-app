import App from './App';
import { connect } from 'react-redux';

const mapStateToProps = (state)=>{
    return{
        posts : state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        remove : (id)=>dispatch(todoToggle(id))
    }
 }


export default connect(mapStateToProps , mapDispatchToProps)(App);