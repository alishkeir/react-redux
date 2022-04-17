import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

//? combine all reducers to have them in one variable
const reducers = combineReducers({
    account: accountReducer,
});

export default reducers;
