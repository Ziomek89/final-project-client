import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ItemListPage(){

  const [itemsArray, setItemsArray] = useState([]);

  useEffect(() => {

    const storedToken = localStorage.getItem('authToken');

    axios.get('http://localhost:3001/api/infos',
     {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
     })
      .then(res => setItemsArray(res.data.infos))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {itemsArray.map(element => {
        return (
          <div key={element._id}>
            <h3 style={{
                fontSize: '36px',
                color: 'white',
                textShadow: '2px 2px black'
            }}>Name: {element.title}</h3>
            <p style={{
                fontSize: '24px',
                color: 'white',
                textShadow: '2px 2px black'
            }}>Description: {element.description}</p>
            <Link to={`/info/${element._id}`} ><p style={{
                fontSize: '24px',
                color: 'white',
                textShadow: '2px 2px black'
            }}>View Item</p></Link>
            <p style={{
                borderColor: 'black',
                borderBottom: 'solid 5px'
            }}></p>
          </div>
        );
      })}
    </div>
  );
}

export default ItemListPage;