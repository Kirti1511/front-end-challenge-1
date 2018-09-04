import React, { Component } from 'react';
import Product from './Product';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mode Street</h1>
        </header>
        <Product />
      </div>
    );
  }
}

export default App;
