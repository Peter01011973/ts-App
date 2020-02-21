import React, {useEffect, useState} from 'react';
import Layout from './HOC/Layout';
import { Routes } from './components/Routes';
import { useDispatch } from 'react-redux';
// import {RootState} from './store/storeConfig';
import {authSuccess} from './store/auth/actions';
interface Props {
  // email: string | null
}

const App: React.FC<Props> = () => {

  const dispatch = useDispatch();
  
  
  useEffect(
    ()=> {
      const email = localStorage.getItem('email');
      const token = localStorage.getItem('token');
      if (token) {
        dispatch(authSuccess({
        loggedIn: true,
        email,
        token        
        }))
      } 
    }
  ,[dispatch])

  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

// const mapStateToProps = (state: RootState) => { 
//   return {
//     email: state.auth.email
//   }
// }

// const mapDispatchToProps = { authSuccess }

export default App;
