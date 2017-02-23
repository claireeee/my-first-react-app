import React, { Component } from 'react';
import './header.css';
import logo from './wwf-logo.png';

class header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="Header-logo" alt="logo" />
          <ul>
            <li>
              Retour à la frise
            </li>
            <li>
              Faire un don
            </li>
          </ul>
        </div>
      
    );
  }
}

export default header;
