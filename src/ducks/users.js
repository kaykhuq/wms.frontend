import * as types from './constants';


var initialState = [{
    name:'abc',
    username:'abc',
    email:'abc@gmail.com'
}];

const users = (state = initialState, action) => {
    var { product } = action;
    switch (action.type) {
        case types.FETCH_ALL_USER:
            // state = action.users;
            return [...state];
        default: return [...state];
    }
}

export default users;