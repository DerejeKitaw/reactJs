import React from 'react';
import './style.css';
import EditableTimer from '../EditableTimer';

export default() => (
  <div className="container editableTimerList_container">
    <div>EditableTimerList</div>
    <EditableTimer />
  </div>
);