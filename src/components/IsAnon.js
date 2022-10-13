import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';


function IsAnon({ children }){
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if(isLoading) {
    return <p>loading...</p>
  }

  if(isLoggedIn){
    return <Navigate to="/info-list" />
  } else {
    return children;
  }
}

export default IsAnon;