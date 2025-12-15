import React from 'react'

function UserChoices() {
     
  return (
    
        <div className='addtional-info'>
            <label htmlFor="gender">Gender*</label>
            <div>

            <input id="male" type="radio" name='gender'/>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name='gender'/>
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" name='gender'/>
            <label htmlFor="other">Other</label>

            </div>
            <label htmlFor="subject">subject*</label>
            <div id="subject">
            
                <input id="dsa" type="checkbox"/>
                <label htmlFor="dsa">Data Structure</label>
                <input type="checkbox" id="net"/>
                <label htmlFor="net">Networking</label>
                <input type="checkbox" id="other"/>
                <label htmlFor="other">Other</label>
            
            </div>
        </div>



 
  )
}
export default UserChoices;
