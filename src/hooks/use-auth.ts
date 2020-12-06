import { useSelector } from 'react-redux';
import { RootState } from '~/store';
import { AuthState } from '~/store/auth/auth.interface';

const useAuth = () => useSelector<RootState, AuthState>((state) => state.auth);

export default useAuth;
