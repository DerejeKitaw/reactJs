import React, { Component } from 'react'
import './style.css';

export default class extends Component {
  render() {
    const style = {
      display: 'inline',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black',
    };
    return (
      <div style={style}>
      CharComponent
      </div>
    )
  }
}
