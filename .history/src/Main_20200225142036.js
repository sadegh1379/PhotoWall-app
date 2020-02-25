import App from './App';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return{
        posts : state
    }
}

function mapDispatchToProps = (dispatch)=>{
    function return{
        removePost : (id)=>Di
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);