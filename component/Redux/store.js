import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import SagaData from './saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: defaultMiddle =>
    defaultMiddle({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middleware),
});

sagaMiddleware.run(SagaData);

export default store;
