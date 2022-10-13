import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupPage(){

  const navigate = useNavigate()

  const [state, setState] = useState({
    email: '',
    username: '',
    password: ''
  });

  const [error, setError] = useState(null)

  const updateState = event => setState({
    ...state,
    [event.target.name]: event.target.value
  });

  const handleSubmit = event => {
    event.preventDefault();

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, state)
      .then(res => {
        console.log(res.data);
        navigate('/login')
      })
      .catch(err => setError(err.response.data.error))

  }

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
      <div style={{
        paddingLeft: '10px'
      }}>
          <label>
            Email:
          </label>
          <input
            name="email"
            value={state.email}
            onChange={updateState}
          />
        </div>
        <div style={{
            paddingRight: '25px',
            paddingTop: '10px'
        }}>
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
            paddingRight: '20px',
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
            paddingTop: '10px',
        }}>
          <button>
            Sign Up!
          </button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );

}

export default SignupPage;