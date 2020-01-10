import _ from 'lodash';


const UserReducer = (state = {}, action ) => {
    switch(action.type) {
        case 'CREATE_USER':
             return {...state, [action.payload.id]: action.payload };  
        case 'SHOW_USERS':
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case 'DELETE_USER':
            return _.omit(state, action.payload); 
        default:
            return state;
    }
};

export default UserReducer;

