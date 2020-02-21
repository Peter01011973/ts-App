import React from 'react';
import {connect} from 'react-redux';
import {authLogout } from '../../store/auth/actions';
import { AuthActionTypes } from '../../store/auth/types';
import { Redirect } from 'react-router-dom';
 
interface Props {
    authLogout: () => AuthActionTypes;
}

const Logout: React.FC<Props> = ({authLogout}) => {
    localStorage.clear();
    authLogout();
    return ( <Redirect to='/'/> )
}

const mapDispatchToProps = {authLogout}
export default connect(null, mapDispatchToProps)(Logout)

// const mapDispatchToProps = (dispatch: Dispatch<any>) => {
//     return {
//         authLogout1: () => dispatch(authLogout())
//     };
//   };
