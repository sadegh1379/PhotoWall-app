import App from './App';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return{
        posts : state
    }
}

function 

export default connect(mapStateToProps , mapDispatchToProps)(App);