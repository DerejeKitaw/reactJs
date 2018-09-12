import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class BlackSea extends Component {
  state = {
    counter: 3,
  };

  componentDidMount() {
    this.interval = setInterval(() => (
      this.setState(prevState => {
        return {
          counter: prevState.counter - 1,
        };
      }
    )), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <h3>Black Sea</h3>
        <p>Nothing to sea [sic] here ...</p>
        <p>Redirecting in {this.state.counter}...</p>
        {
            // Redirect is represented as nothing more than a React component. Want to redirect? Just render a Redirect component.
          (this.state.counter < 1) ? (
            <Redirect to='/' />
          ) : null
        }
      </div>
    );
  }
}