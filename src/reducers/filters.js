import { handleActions } from 'redux-actions';
import { addFilter } from '../actions/filters';

export const initialState = {
    filtersList: [],
};

export const filters = handleActions(
  {
    [addFilter]: (state, { payload: filtersList }) => ({
      ...state,
      filtersList,
    }),
  },
  initialState,
);
