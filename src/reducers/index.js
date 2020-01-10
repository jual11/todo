import TaskReducer from './TaskReducer';
import UserReducer from './UserReducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const reducer = combineReducers({
    TaskReducer: TaskReducer,
    form: formReducer,
    Users: UserReducer
    
});

export default reducer;