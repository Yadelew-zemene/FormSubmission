import React from 'react'
import { useState } from 'react';

function UserInputInfmation() {
   const [inputs, setInputs] = useState({});


   function hadleInputChange(e) {
      e.preventDefault();
      setInputs(values => ({ ...values, [e.target.name]: e.target.value }));
      alert(e.target.value)

   }
  return (
      <div className="user-inf">
      
        <label htmlFor="firs-name">First Name*</label>
        <div>
           <input
              name='fname'
              id="firs-name"
              type="text"
              placeholder="Enter first name" value={inputs.fname}
              onChange={hadleInputChange} />
       </div>
      
        <label htmlFor="last-name">Last Name*</label>
        <div>
           <input
              name='lname'
              id="last-name"
              type="text"
              placeholder="Enter last name"
               value={inputs.lname}
               onChange={hadleInputChange}
           />
           
       </div>
      
        <label htmlFor="email">User Email*</label>
        <div>
           <input
              name="email"
              id="email"
              type="text"
              placeholder="Enter user email"
              value={inputs.email}
              onChange={hadleInputChange}
           />
        </div>
     
        <label htmlFor="contact">Contact*</label>
        <div>
           <input
              name='contact'
              
              id="contact"
              type="text"
              placeholder="Enter phone number" 
              value={inputs.contact}
              onChange={hadleInputChange}
           />
        </div>
        
    </div>
  )
}
export default UserInputInfmation;
