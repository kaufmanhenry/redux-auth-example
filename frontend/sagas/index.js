import AuthSaga from './auth';

export default function* IndexSaga() {
  yield [
    AuthSaga()
  ];
}
