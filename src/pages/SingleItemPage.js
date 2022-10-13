import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PersonalForm from '../components/PersonalForm';




function SingleItemPage(){

  const navigate = useNavigate();

  const { infoId } = useParams();

  const [singleItem, setSingleItem] = useState(null);

  console.log(infoId);

  const getSingleItem = infoId => {

    const storedToken = localStorage.getItem('authToken');

    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/infos/${infoId}`, {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
    })
      .then(res => setSingleItem(res.data.info))
      .catch(err => console.log(err))
  };

  const deleteSingleItem = infoId => {
    const storedToken = localStorage.getItem('authToken');
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/infos/${infoId}`, {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
    })
      .then(res => {
        console.log(res);
        navigate('/info-list');
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getSingleItem(infoId);
  }, [infoId])

  return (
    <div style={{
        color: 'white',
        textShadow: '2px 2px black'
    }}>
      {singleItem && (
        <>
          <div>
            <h2>Name: {singleItem.title}</h2>
            <p style={{
                borderBottom: 'solid',
                paddingBottom: '10px'
            }}>Description: {singleItem.description}</p>
            {singleItem.personals.map(element => {
              return (
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        borderBottom: 'solid',
      }}>
                    <p><h3>Card Id: {element.title}</h3></p>

                    <p>Info: {element.description}</p>
                </div>
                
              );
            })}
          </div>
          <PersonalForm infoId={infoId} getSingleItem={getSingleItem} />
          <div>
            <h3>Delete Card</h3>
            <button
              onClick={() => deleteSingleItem(infoId)}
            >
              Delete
            </button>
          </div>
        </>
      )} 
    </div>
  );
}

export default SingleItemPage;