import App from './App';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return{
        posts : state
    }
}

function mapDispatch 

export default connect(mapStateToProps , mapDispatchToProps)(App);