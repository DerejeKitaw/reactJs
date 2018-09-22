import React from 'react';
import './style.css';

export default () => (
  <div className="item">
    <div className="image">
      <img src="images/products/image-aqua.png" />
    </div>
    <div className="content middle aligned ">
      <div className="description">
      <span className="glyphicon-class"></span>
        <a>Fort Knight</a>
        <p>Authentic renaissance actors, delivered in just two weeks.</p>
      </div>
      <div className="extra">
        <span>Submitted by:</span>
        <img className="ui avatar image" src="images/avatars/daniel.jpg" />
      </div>
    </div>
  </div>
);
