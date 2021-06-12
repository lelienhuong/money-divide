import {LOGIN,LOGOUT} from '../actions/types'
let auth = null
export default function navReducers(state = auth, action) {
    switch (action.type) {
        case LOGIN:
            state = action.payload.data
            return state;    
        case LOGOUT:
            state = null;
            return state;
        default:
            return state;
    }
}