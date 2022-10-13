import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

function Navbar(){

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav style={{
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
      <Link to="/">Home</Link>
      { isLoggedIn && (
        <>
          <Link to="/info-list">Info List</Link>
          <Link to="/info/create">Add Card</Link>
          <Link to="/add/card">Find Pokemon Card</Link>
          <Link to="/add/card-id">Card Id</Link>
          <button
            onClick={logOutUser}
          >Logout</button>
        </>
      )}
      { user && (
        <p>
          Hello, {user.username}!
        </p>
      )}
      { !isLoggedIn && (
        <>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;