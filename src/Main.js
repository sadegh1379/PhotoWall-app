import App from './App';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return{
        posts : state
    }
}

export default connect(mapStateToProps)(App);