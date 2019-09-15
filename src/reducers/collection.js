import { handleActions } from 'redux-actions';
import {
    saveCollection,
} from '../actions/collection';

export const initialState = {
    collectionList: null,
};

export const collection = handleActions(
  {
    [saveCollection]: (state, { payload: collectionList }) => ({
      ...state,
      collectionList,
    }),
  },
  initialState,
);
