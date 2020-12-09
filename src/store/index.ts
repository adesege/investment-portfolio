import { configureStore } from '@reduxjs/toolkit';
import addressReducer from './address';
// eslint-disable-next-line import/no-cycle
import authReducer from './auth';
import flashReducer from './flash';

const store = configureStore({
  reducer: {
    auth: authReducer,
    flash: flashReducer,
    address: addressReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
