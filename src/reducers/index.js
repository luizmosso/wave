import  {combineReducers} from 'redux';
import login from './login';
import notification from './notification';
import familia from './familia';

export default combineReducers({
  login, notification, familia
});