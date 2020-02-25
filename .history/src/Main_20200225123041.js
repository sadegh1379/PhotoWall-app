import App from './App';
import { connect } from 'react-redux';

const mapStateToProps = (state)=>{
    return{
        posts : state
    }
}