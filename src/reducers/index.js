import { collection } from './collection';
import { combineReducers } from 'redux';

export const getRootReducer = () => combineReducers({
    collection,
});
