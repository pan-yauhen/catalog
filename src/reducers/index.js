import { collection } from './collection';
import { filters } from './filters';
import { combineReducers } from 'redux';

export const getRootReducer = () => combineReducers({
    collection,
    filters,
});
