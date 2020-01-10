import _ from 'lodash';


const TaskReducer = (state = {}, action ) => {
    switch(action.type) {
        case 'CREATE_TASK':
            return { ...state, [action.payload.id]: action.payload};
        case 'SHOW_TASKS':
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case 'DONE_TASK':
            return {...state, [action.payload.id]: action.payload };  
        case 'DELETE_TASK':
            return _.omit(state, action.payload);  
        default:
            return state;
    }
};

export default TaskReducer;






