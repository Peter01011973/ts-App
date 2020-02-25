import transport from '../transport';
                                                                                                
const baseAPIsignIn: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDt7JIVgglxCvHXO_LL-DQjgD4raDnSlPE';
const baseAPIsignUp: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDt7JIVgglxCvHXO_LL-DQjgD4raDnSlPE';

export const singInFB = (email: string, password: string, isSignIn: boolean) => {    
    const baseAPI: string = isSignIn ? baseAPIsignIn : baseAPIsignUp;
    return transport(baseAPI, {
        method: 'post',
        data: {
            email,
            password,
            returnSecureToken: true
        }
    })
}
