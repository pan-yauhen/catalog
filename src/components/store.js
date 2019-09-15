import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { getRootReducer } from '../reducers';

export const configureStore = (wrappedEpic) => {
  const epicMiddleware = createEpicMiddleware({dependencies: {ajax}});

  const store = createStore(
    getRootReducer(),
    compose(applyMiddleware(
      epicMiddleware,
    )),
  );

  epicMiddleware.run(wrappedEpic);

  return store;
};
