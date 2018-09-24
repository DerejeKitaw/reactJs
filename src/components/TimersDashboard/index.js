import React from 'react';
import './style.css';
import EditableTimerList from '../EditableTimerList';
import ToggleableTimerForm from '../ToggleableTimerForm';

export default() => (
  <div className="container">
    <div>TimersDashboard</div>
    <EditableTimerList />
    <ToggleableTimerForm />
    
  </div>
);