import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFlashMessage } from './flash.interface';

const flashSlice = createSlice({
  name: 'flash',
  initialState: { type: null, messages: [], title: '' } as IFlashMessage,
  reducers: {
    showFlash(state, action: PayloadAction<IFlashMessage>) {
      state.type = action.payload.type;
      state.messages = Array.isArray(action.payload.messages)
        ? action.payload.messages
        : [action.payload.messages];
    },
    removeFlash(state) {
      state.type = null;
      state.messages = null;
    },
  },
});

export const { removeFlash, showFlash } = flashSlice.actions;

export default flashSlice.reducer;
