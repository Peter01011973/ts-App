import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
interface IProps {
  exact?: boolean;
  isAuthenticated: boolean | null;
  path: string;
  component: React.ComponentType<any>;
}

const ProtectedRoute = ({ component: Component, isAuthenticated, ...otherProps}: IProps) => {
  const location = useLocation(); 
  if (!isAuthenticated) return <Redirect to = {{pathname: "/login", state: { from: location }}}/>
  return <Route render={() => <Component {...otherProps} />}/>
}
 
export default ProtectedRoute;
