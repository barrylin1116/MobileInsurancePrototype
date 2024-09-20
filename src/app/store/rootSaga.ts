import { all, spawn } from 'redux-saga/effects';
import watchCommonSaga from './common/saga';
import watchUISaga from './ui/saga';

export default function * rootSaga () {
  yield all([
    spawn(watchCommonSaga),
    spawn(watchUISaga)
  ]);
};
