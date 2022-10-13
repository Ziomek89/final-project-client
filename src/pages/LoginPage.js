import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';

function LoginPage(){

    const { storeToken, authenticateUser } = useContext(AuthContext)
  
    const navigate = useNavigate()
  
    const [state, setState] = useState({
      username: '',
      password: ''
    });
  
    const updateState = event => setState({
      ...state,
      [event.target.name]: event.target.value
    });
  
    const handleSubmit = event => {
      event.preventDefault();
  
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, state)
        .then(res => {
          console.log(res.data);
          storeToken(res.data.authToken);
          authenticateUser();
          navigate('/');
        })
        .catch(err => console.log(err))
  
    }
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username:
            </label>
            <input
              name="username"
              value={state.username}
              onChange={updateState}
            />
          </div>
          <div style={{
            paddingLeft: '5px',
            paddingTop: '10px'
          }}>
            <label>
              Password:
            </label>
            <input
              name="password"
              type="password"
              value={state.password}
              onChange={updateState}
            />
          </div>
          <div style={{
            paddingTop: '10px'
          }}>
            <button>
              Log In!
            </button>
          </div>
        </form>
      </div>
    );
  
  }
  
  export default LoginPage;