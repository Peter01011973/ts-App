import axios from 'axios';
                                                                                                 
const baseAPIsignIn = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDt7JIVgglxCvHXO_LL-DQjgD4raDnSlPE';
// const baseAPIsignUp = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDt7JIVgglxCvHXO_LL-DQjgD4raDnSlPE';


const transport = async (url: string, config: any) => {
    try {
        const response = await axios(url, config);
        return {
            response,
            success: true,
            message: response.statusText,
        }
    } catch (error) {
        return {
            response: error.response,
            success: false,
            message: error.message,
        }
    }
};

export const singInFB = (email: string, password: string) => {    
    return transport(`${baseAPIsignIn}`, {
        method: 'post',
        data: {
            email,
            password,
            returnSecureToken: true
        }
    })
}
