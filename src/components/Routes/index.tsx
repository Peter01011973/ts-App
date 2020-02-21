import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from '../../containers/About';
import Auth from '../../containers/Auth';
import Post from '../../containers/Post';
import Logout from '../../containers/Logout';
import ProtectedRoute from '../../components/ProtectedRoute';


interface Props {

}
  
export const Routes: React.FC<Props> = () => {

    return (
        <Switch>
            <Route exact path='/' component={About} />
            <Route path='/login' component={Auth} />
            <Route path='/register' component={Auth} />
            <ProtectedRoute path='/posts' component={Post} />
            <Route path='/logout' component={Logout} />
        </Switch>
    )


}