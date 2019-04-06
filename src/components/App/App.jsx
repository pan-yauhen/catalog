import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Header } from '../Header/Header';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="app">
              <Header />
              <main className="main">World</main>
              <footer className="footer">o/</footer>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
