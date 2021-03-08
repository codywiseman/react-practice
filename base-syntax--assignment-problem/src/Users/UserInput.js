import React from 'react';
import './users.css'

const userInput = (props) => {
  return (
    <div className='text-center'>
      <input type='text' onChange={props.changeUser} value={props.username}></input>
    </div>
  )
}

export default userInput;
