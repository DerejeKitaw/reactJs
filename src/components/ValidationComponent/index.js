import React, { Component } from 'react';

export default class extends Component {
  render() {
    const len = this.props.inputLength;
    let lable = '';
    if (this.props.inputLength < 5) {
      lable = <p>Text too short</p>;
    } else {
      lable = <p>Text long enough</p>;
    }
    return (
      <div>
        You have {this.props.inputLength}
        {lable}
      </div>
    );
  }
}
