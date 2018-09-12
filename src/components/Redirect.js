import { Component } from 'react'
import PropTypes from 'prop-types';

export default class Redirect extends Component {

  static contextTypes = {
    history: PropTypes.object,
  }
  // Redirect is represented as nothing more than a React component. Want to redirect? Just render a Redirect component.
  componentDidMount() {
    const history = this.context.history;
    const to = this.props.to;
    history.push(to);
  }

  render() {
    return null;
  }
}