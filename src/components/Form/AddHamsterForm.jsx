import React, { useState } from 'react'
import './AddHamsterForm.css';

const AddHamsterForm = () => {
  const [hamsterName, setHamsterName] = useState('');
  const [age, setAge] = useState('');
  const [loves, setLoves] = useState('');
  const [favFood, setFavFood] = useState('');
  
  return (
    <div className="form-content-right">
      <form className="form">
         <div className="form-inputs">
           <input 
            id="hamsterName"
            types="text"
            name="hamsterName"
            className="form-input"
            placeholder="Hamster Name"
            onChange={(e) => setHamsterName(e.target.value)}
          />
         </div>
         <div className="form-inputs">
           <input 
            id="Age"
            
            types="text"
            name="age"
            className="form-input"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            />
         </div>

         <div className="form-inputs">
           <input 
            id="loves"
            types="text"
            name="loves"
            className="form-input"
            placeholder="Loves"
            onChange={(e) => setLoves(e.target.value)}
            />
         </div>

         <div className="form-inputs">
           <input 
           id="favFood"
            types="text"
            name="favFood"
            className="form-input"
            placeholder="Fav Food"
            onChange={(e) => setFavFood(e.target.value)}
            />
         </div>
         <button className="form-input-btn" type="submit">Add</button>
      </form> 
    </div>
  )
};

export default AddHamsterForm;
 
