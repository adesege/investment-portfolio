import { useContext } from 'react';
import AppCheckboxContext from '../AppCheckboxGroup/AppCheckboxContext';

const useCheckbox = () => useContext(AppCheckboxContext);

export default useCheckbox;
