import { useSelector } from 'react-redux';
import { RootState } from '~/store';
import { AddressState } from './address.interface';

const useAddress = () => useSelector<RootState, AddressState>((state) => state.address);

export default useAddress;
