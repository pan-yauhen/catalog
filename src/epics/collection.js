import { mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ofType, ActionsObservable } from 'redux-observable';
import {
    fetchCollection, saveCollection
} from '../actions/collection';
import { getCollectionData } from '../api';

export const collectionEpic = (action$, state$, { ajax }) => action$.pipe(
  ofType(fetchCollection),
  switchMap(() => getCollectionData(ajax).pipe(
      mergeMap((response) => ActionsObservable.of(saveCollection(response.data))),
      catchError(() => console.log('error')),
    ))
);
