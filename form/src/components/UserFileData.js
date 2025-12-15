import React from 'react'
import { useState } from 'react';

function UserFileData() {
    const [message, setMessage] = useState("");
    const [education, setEducation] = useState('');
    
    function hadleSelection(e) {
        e.preventDefault();
        setEducation(e.target.education);
    }
    function handleFeedback(e) {
        e.preventDefault();
        setMessage(e.target.value);
      
    }
     
     return (
         <><div className="Other-detail">
             
             <div>
                

            <label  id="fileupload">Upload Your Resume*</label>
            <div>
            <input id="fileupload" type="file" />
            </div>

        </div>
        <label htmlFor="url">Enter URL</label>
        <div>
            <input type="text" placeholder="Enter url" />
        </div>
        <div>
    <label htmlhtmlFor="choice">Select your Education Level*</label> 
                 <div>
        <select name="chice" id="choice" onChange={hadleSelection}>
        
        
        <option value="High school">Gradgute</option>
        <option value="Under Gragute">Under Gradgute</option>
        <option value="Under Gragute">High school</option>
        <option value="Under Gragute">Primary</option>
      </select>
</div>
   
</div>
    </div>
    <div className='message'>
        <label htmlhtmlFor="message">Write your Feedback*</label>
        <div>
            <textarea
             name=""
        id="message"
        value={message}
        onChange={handleFeedback}
                     ></textarea>
                     
                     
                 </div>
                 
             </div>
         </>
   
    
  )
}

export default UserFileData;