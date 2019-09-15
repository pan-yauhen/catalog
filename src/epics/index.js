import { combineEpics } from 'redux-observable';
import { collectionEpic } from './collection';

export const rootEpic = combineEpics(
    collectionEpic,
);