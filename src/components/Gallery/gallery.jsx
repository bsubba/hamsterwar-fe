import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import { Form } from "../Form/Form";
import { getHamsterIndex } from '../../util/util.js';

import './gallery.css';

const Gallery = () => {
  const [hamsters, setHamsters] = useState();
  
   const fetchData = useCallback(() => {
    axios({
      "method": "GET",
      "url": "https://safe-harbor-15583.herokuapp.com/api/hamsters"
    })
    .then((response) => {
      setHamsters(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, []);
  
  useEffect(() => {
    fetchData()
  }, [fetchData]);
  
 const handleDeleteHamster = (id) => {
   
     axios({
      "method": "DELETE",
      "url": `https://safe-harbor-15583.herokuapp.com/api/hamsters/${id}`
    })
    .then((response) => {
      const deletedHamsterIndex = getHamsterIndex(hamsters, id);
      const hamsterListAfterDelete = hamsters.filter((_, index) => index !== deletedHamsterIndex);
      setHamsters(hamsterListAfterDelete);
    })
    .catch((error) => {
      console.log(error)
    })
  
  }
  
  const renderHamster = () => {
    const hamstersList = hamsters.map( (hamster, index) => {   
        // console.log('hamster: ', require(`../../images/${hamster.imgName}`))     
          return (
          <div className='image-wrapper' key={index}>
            <img
            className="img-responsive" alt="hampsters" 
            src={`img/${hamster.imgName}`} />
            <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDeleteHamster(hamster.id)}/>
          </div>
          );
      } );
      return hamstersList;
  }
  
  const handleAddHamster = () => {
    return (
      <div className="form-panel">
          <Form/>
      </div>
      );
  }
  
  return (
    <div className="container">
    <div className='add-hamster-div'>
          < button className='form-input-btn'><Link to='/add-hamster'>Add Hamster</Link></button>
        </div>
      <div className="row">
          <div className="list"> 
              { hamsters && renderHamster() }
          </div>
      </div>
    </div>
      );
  
}

export default Gallery;