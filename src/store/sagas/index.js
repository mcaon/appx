import {all} from 'redux-saga/effects';
import {exampleSagas} from './example';
import {teamSagas} from './team';

export default function* rootSaga() {
  yield all([
    ...exampleSagas,
    ...teamSagas,
  ]);
}
