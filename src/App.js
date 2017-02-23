import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from './footer.js';
import Header from'./header/header.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React HEY</h2>
      </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
