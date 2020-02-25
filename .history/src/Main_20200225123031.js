import App from './App';
import { con } from 'react-redux'
const mapStateToProps = (state)=>{
    return{
        posts : state
    }
}