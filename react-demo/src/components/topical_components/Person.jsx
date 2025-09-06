import React from 'react';

const Person = ({name, age}) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p><strong>Age: {age}</strong></p>
    </div>
  )
}

export default Person;
