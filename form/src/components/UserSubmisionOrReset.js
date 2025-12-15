import React from 'react'
import "../components/ComponentsCSS/SubmitResetbtn.css"

 function UserSubmisionOrReset() {
  return (
      <>
        <h3>Submmit Or Reset</h3>
      <div className='btn'>
        <input type="button" className='button' id="reset" value="Reset"/>
        <input type="button" className='button' id="submit" value="Submit"/>
      </div>
      </>
  )
}

export default UserSubmisionOrReset;