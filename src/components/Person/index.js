import React from 'react';
import './style.css';

const Person = (props) => {
  return <div onClick={props.clickGGGG} className="container person_container">
    <p >I'm {props.name} {props.age} years old</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name} />
  </div>
}

export default Person;