import React, { Component } from 'react';
import './App.scss';
import { Header } from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <main className="main">World</main>
          <footer className="footer">o/</footer>
      </div>
    );
  }
}

export default App;
