import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function AddItem(){

  const navigate = useNavigate()

  const [state, setState] = useState({
    title: '',
    description: ''
  });

  const updateState = event => setState({
    ...state,
    [event.target.name]: event.target.value
  });

  const handleSubmit = event => {
    event.preventDefault();
    const storedToken = localStorage.getItem('authToken');
    axios.post(`http://localhost:3001/api/infos`, state, {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
    })
      .then(res => {
        console.log(res.data);
        navigate('/info-list');
      })
      .catch(err => console.log(err))
  }

  return (

    <div style={{
        color: 'black',
        textShadow: '2px 2px white'
    }}>
      <h1>Add a new card</h1>
      <form onSubmit={handleSubmit}>
        <div style={{
        paddingTop: '10px',
        fontSize: '24px'
        }}>
          <label>
            Title:
          </label>
          <input
            name="title"
            value={state.title}
            onChange={updateState}
          />
        </div>
        <div style={{
        marginRight: '74px',
        paddingTop: '5px',
        fontSize: '24px'
        }}>
          <label>
            Description:
          </label>
          <input
            name="description"
            value={state.description}
            onChange={updateState}
          />
        </div>
        <div style={{
        paddingTop: '10px'
        }}>
          <button>
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;