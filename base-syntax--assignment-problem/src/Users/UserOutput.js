import React from 'react';

const userOutput = (props) => {
  return (
    <div className='text-center'>
      <p>Hello, my name is {props.username}</p>
      <p>I love learning how to code!</p>
    </div>
  )
}

export default userOutput;
