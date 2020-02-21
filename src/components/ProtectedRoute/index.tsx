import React from 'react'
import { Route, RouteProps, Redirect, RouteComponentProps, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/storeConfig';

// interface Props {
//     component: Component,
//     ...rest        
// }

export interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
    authenticationPath: string;
    redirectPathOnAuthentication: string;
    setRedirectPathOnAuthentication: (path: string) => void;
  }
  
  export const ProtectedRoute: React.FC<ProtectedRouteProps> = props => {
    const currentLocation = useLocation();
  
    let redirectPath = props.redirectPathOnAuthentication;
    if (!props.isAuthenticated) {
      props.setRedirectPathOnAuthentication(currentLocation.pathname);
      redirectPath = props.authenticationPath;
    }
  
    if (redirectPath !== currentLocation.pathname) {
      const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
      return <Route {...props} component={renderComponent} render={undefined} />;
    } else {
      return <Route {...props} />;
    }
  };
  
  export default ProtectedRoute;


// const ProtectedRoute: React.SFC<RouteProps> = ({
//     component: Component, 
//     ...rest
// }: {
//     component: React.ComponentType<RouteProps>;
// }) => {
//     const isAuthenticated = useSelector((state: RootState) => state.auth.loggedIn)
    
//     return (
//         <Route 
//             {...rest} 
//             render={({location})=>(
//                 isAuthenticated ? <Component /> : <Redirect 
//                     to={{
//                         pathname: "/login",
//                         state: { from: location }
//                     }}
//                 />
//             )}
//         />
//     )
// }

// export default ProtectedRoute


// const ProtectedRoute: React.SFC<RouteProps> = ({
//     component: Component,
//     ...rest
//   }: {
//     component: React.ComponentType<RouteComponentProps<any>>;
//   }) => {

//     const isAuthenticated = useSelector((state: RootState) => state.auth.loggedIn)
//     return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated 
//           ? <Component {...props} /> 
//           : <Redirect to="/login" />
//       }
//     />
//   )};

// export default ProtectedRoute
