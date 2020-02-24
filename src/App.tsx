import React, {useEffect} from 'react';
import Layout from './HOC/Layout';
import { Routes } from './components/Routes';
import { useDispatch, connect } from 'react-redux';
import {authSuccess} from './store/auth/actions';
import { RootState } from './store/storeConfig';
interface Props {
  loggedIn: boolean
}

const App: React.FC<Props> = ({loggedIn}) => {
  const dispatch = useDispatch();
    
  useEffect(
    ()=> {
      const getToken = async () => {
        const email = await localStorage.getItem('email');
        const token = await localStorage.getItem('token');
        dispatch(authSuccess(
          {
            loggedIn: true,
            email,
            token        
          }
        ))
      }
      getToken()
    }
  ,[dispatch])

  return (
    <Layout>
      <Routes isAuthenticated = {loggedIn}/>
    </Layout>
  );
}

const mapStateToProps = (state: RootState) => { 
  return {
    loggedIn: state.auth.loggedIn
  }
}
// const mapDispatchToProps = { authSuccess }

export default connect(mapStateToProps)(App);
