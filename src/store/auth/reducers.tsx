import {AuthState, AuthActionTypes, AUTH_SUCCESS, AUTH_LOGOUT} from '../auth/types';

const initAuthState: AuthState = {
    loggedIn: false,
    email: 'tt',
    token: ''
}

const authReducer = (state: AuthState = initAuthState, action: AuthActionTypes) => {
    switch (action.type) {
        case AUTH_SUCCESS: return action.payload
        case AUTH_LOGOUT: return {
            loggedIn: false,
            email: '',
            token: ''            
        }
        default: return state
    }
}

export default authReducer;