import React from 'react';

const validation = (props) => {
  let validate = 'Text too short'
  if(props.length >= 5) {
    validate = 'Text long enough'
  }
  return (
    <div>
      <p>{validate}</p>
    </div>
  )
}

export default validation;
