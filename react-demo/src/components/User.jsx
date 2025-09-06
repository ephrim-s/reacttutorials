import React from 'react'

const User = (props) => {
  return (
    <section style={{marginBottom: '20px', border: '10px solid red', color: 'blue'}}>
        <img src={props.img} alt={props.name} width={200}/>      
        <h1>Name: {props.name}</h1>
        <h2>Age: {props.age}</h2>
        <h3>Is Married: {props.isMarried? "Married" : "Not Married"}</h3>
        <h4>Hobbies: {props.hobbies.join(', ')}</h4>
    </section>
  )
}

export default User
