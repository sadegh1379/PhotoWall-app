import App from './App';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return{
        posts : state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        toggleTodo : (id)=>dispatch(todoToggle(id))
    }
 }


export default connect(mapStateToProps , mapDispatchToProps)(App);