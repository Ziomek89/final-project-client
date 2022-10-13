import { useState } from 'react';
import axios from 'axios';

function PersonalForm(props){

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
    const personalObject = {
      ...state,
      infoId: props.infoId
    };
    const storedToken = localStorage.getItem('authToken');
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/personals`, personalObject, {
        headers: {
            authorization: `Bearer ${storedToken}`
        }
    })
      .then(res => {
        console.log(res.data);
        props.getSingleItem(props.infoId)
        setState({
          title: '',
          description: ''
        });
      })
      .catch(err => console.log(err))
  }


  return (


    <div>
      <h3>Add Details</h3>
      <form onSubmit={handleSubmit}> 
        <div>
          <label>
            Id:
          </label>
          <input
            name="title"
            value={state.title}
            onChange={updateState}
          />
        </div>
        <div style={{
        marginRight: '15px',
        paddingTop: '10px'
      }}>
          <label>
            Info:
          </label>
          <input
            name="description"
            value={state.description}
            onChange={updateState}
          />
        </div>
        <div style={{
            paddingBottom: '10px',
            borderBottom: 'solid',
            marginTop: '10px'
          }}>
          <button>
            Add Info
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalForm;