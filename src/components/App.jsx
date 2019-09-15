import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {BrowserRouter} from 'react-router-dom';
import {Footer} from './Footer/Footer';
import {wrapRootEpic} from '../epics/wrap-root-epic';
import {rootEpic} from '../epics';
import {configureStore} from './store';

class App extends Component {
  render() {
    const wrappedEpic = wrapRootEpic(rootEpic);

    const store = configureStore(wrappedEpic);

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Main/>
            <Footer/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
