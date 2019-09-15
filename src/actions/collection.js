import { createActions } from 'redux-actions';

export const {
  fetchCollection,
  saveCollection,
} = createActions(
  'FETCH_COLLECTION',
  'SAVE_COLLECTION,'
);
