import {all} from 'redux-saga/effects';
import {teamSagas} from './team';

export default function* rootSaga() {
  yield all([
    ...teamSagas,
  ]);
}
