import React from 'react';
import './style.css';

const Person = (props) => {
  return <div onClick={props.clickP} className="container person_container">
    <p >I'm {props.name} {props.age} years old</p>
    <p>{props.children}</p>
  </div>
}

export default Person;