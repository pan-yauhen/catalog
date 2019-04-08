import React, { Component } from 'react';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './Footer/Footer';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
              <Header />
              <Main />
              <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
