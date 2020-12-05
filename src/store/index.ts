import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import flashReducer from './flash';

const store = configureStore({
  reducer: {
    auth: authReducer,
    flash: flashReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
