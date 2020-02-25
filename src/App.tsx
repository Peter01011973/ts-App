import React, {useEffect} from 'react';
import Layout from './HOC/Layout';
import { Routes } from './components/Routes';
import { useDispatch, connect } from 'react-redux';
import {authSuccess} from './store/auth/actions';
import { RootState } from './store/storeConfig';
import { useLocation, useHistory } from 'react-router-dom';
interface Props {
  loggedIn: boolean,
}

const App: React.FC<Props> = ({loggedIn}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
    
  useEffect(
    ()=> {
      const getToken = async () => {
        const email = await localStorage.getItem('email');
        const token = await localStorage.getItem('token');
        if (token) {
          dispatch(authSuccess(
            {
              loggedIn: true,
              email,
              token        
            }
          ))
          if (location.pathname === '/login')  history.push('/')
        }
      }
      getToken()
    }
    // eslint-disable-next-line
  ,[])

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
