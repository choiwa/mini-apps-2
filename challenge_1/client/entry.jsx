import React from 'react';

const Entry = (props) => {
  return (
    <div>
      <h3>Date: {props.data.date}</h3>
      <p>description: {props.data.description}</p>
    </div>
  )
}

export default Entry;
