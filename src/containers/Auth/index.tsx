import React, { useState } from 'react';
import { Location } from 'history';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import './Auth.css';
import AuthForm from '../../components/AuthForm';
import { singInFB } from '../../Services/FirebaseAuthService';
import { connect } from 'react-redux';
import { authSuccess } from '../../store/auth/actions';
import { AuthActionTypes, AuthState } from '../../store/auth/types';
import { Redirect } from 'react-router-dom';

type LocationState = {
    from: Location;
};
interface Props extends RouteComponentProps<{}, StaticContext, LocationState> {
    location: Location,
    authSuccess: (auth: AuthState) => AuthActionTypes,
}

const Auth: React.FC<Props> = ({ location, authSuccess }) => {

    const isSignin: boolean = location.pathname === '/login';
    const title: string = isSignin ? 'Sing IN' : 'Sign UP';
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [redirectAfterSuccessAuth, setRedirectAfterSuccessAuth] = useState(false);

    const authSubmitHandler = async (email: string, password: string) => {
        setError(null);
        setIsLoading(true);

        const result = await singInFB(email, password, isSignin);
        const { response, success, message } = result;
        setIsLoading(false);
        if (success) {

            localStorage.setItem('token', response.data.localId);
            localStorage.setItem('email', email);

            authSuccess({
                loggedIn: true,
                email,
                token: response.data.localId
            });

            setRedirectAfterSuccessAuth(true);
        } else setError(message)
    }

    if (redirectAfterSuccessAuth && location.state) { return <Redirect to={location.state.from.pathname} /> }
    else if (redirectAfterSuccessAuth) { return <Redirect to='/' /> }

    return (
        <div className='auth'>
            <h3 className='auth__title'>{title}</h3>
            <AuthForm authSubmitHandler={authSubmitHandler} isLoading={isLoading} />
            {error && <h3 className='error'>{error}</h3>}
            {isLoading && <p className='loading'>Loading ...</p>}
        </div>
    )
}

export default connect(null, { authSuccess })(Auth)
