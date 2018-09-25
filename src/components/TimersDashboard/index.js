import React from 'react';
import './style.css';
import EditableTimerList from '../EditableTimerList';
import ToggleableTimerForm from '../ToggleableTimerForm';
import axios from 'axios';
export default class TimersDashboard extends React.Component {
  state = {
    timers: [],
  };

  componentDidMount() {
    this.loadTimersFromServer();
    setInterval(this.loadTimersFromServer, 5000);
  }

  loadTimersFromServer = () => {
    axios.get('/api/timers')
    .then(res => console.log(res.data))
    // client.getTimers((serverTimers) => (
    //     this.setState({ timers: serverTimers })
    //   )
    // );
  };

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  };

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId);
  };

  handleStartClick = (timerId) => {
    this.startTimer(timerId);
  };

  handleStopClick = (timerId) => {
    this.stopTimer(timerId);
  };

  // Inside TimersDashboard
  // ...
 newTimer=(attrs = {}) =>{
    const timer = {
      title: attrs.title || 'Timer',
      project: attrs.project || 'Project',
      // id: uuid.v4(), // eslint-disable-line no-undef
      elapsed: 0,
    };

    return timer;
  }
  createTimer = (timer) => {
    const t = this.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
    axios.post('/api/timers',t)
    .then(res => console.log(res.data))
    // client.createTimer(t);
  };

  updateTimer = (attrs) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      }),
    });
    axios.post('/api/timers',attrs)
    .then(res => console.log(res.data))
    // client.updateTimer(attrs);
  };

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId),
    });
    axios.delete('/api/timers/{timerId}')
    .then(res => console.log(res.data))
    // client.deleteTimer(
    //   { id: timerId }
    // );
  };

  startTimer = (timerId) => {
    // ...
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        } else {
          return timer;
        }
      }),
    });
    axios.post('/api/timers/start', {_id:timerId})
      .then(res => console.log(res.data));
    
    // client.startTimer(
    //   { id: timerId, start: now }
    // );
  };

  stopTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        } else {
          return timer;
        }
      }),
    });
    axios.get('/api/timers',{_id:timerId})
    .then(res => console.log(res.data))
    // client.stopTimer(
    //   { id: timerId, stop: now }
    // );
  };

  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}