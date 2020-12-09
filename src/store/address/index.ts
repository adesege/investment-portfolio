import {
  createSlice, Dispatch, PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { AddressFormData, AddressState } from './address.interface';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    address: '',
    city: '',
    stateOfOrigin: '',
    country: '',
    nationality: '',
  } as AddressState,
  reducers: {
    setAddress(state, { payload }: PayloadAction<AddressState>) {
      state.address = payload.address;
      state.city = payload.city;
      state.country = payload.country;
      state.stateOfOrigin = payload.stateOfOrigin;
      state.nationality = payload.nationality;
    },
  },
});

const { setAddress } = addressSlice.actions;

const transformAddress = (data: Record<string, string>): AddressState => ({
  nationality: data.nationality,
  country: data.country,
  stateOfOrigin: data.state_of_origin,
  city: data.city,
  address: data.address,
});

export const saveAddressAction = (formData: AddressFormData) => async (
  dispatch: Dispatch<PayloadAction<AddressState>>,
) => {
  const { data } = await axios.post('/user/address', formData);
  dispatch(setAddress(transformAddress(data.data)));
};

export const getAddressAction = () => async (
  dispatch: Dispatch<PayloadAction<AddressState>>,
) => {
  const { data } = await axios.get('/user/address');
  dispatch(setAddress(transformAddress(data.data)));
};

export default addressSlice.reducer;
