import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFlash } from '~/store/flash';
import { IFlashMessage } from '~/store/flash/flash.interface';
import { AppDispatch, RootState } from '../../store';
import AppAlert from './AppAlert';

interface AppFlashProps { className?: string; timeout?: number; }

const AppFlash = (props: AppFlashProps) => {
  const flashMessage = useSelector<RootState, IFlashMessage>((state) => state.flash);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeFlash());
    }, props.timeout);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flashMessage]);

  if (!flashMessage.type) return null;

  return (
    <AppAlert
      type={flashMessage.type}
      messages={flashMessage.messages}
      className={props.className}
    />
  );
};

AppFlash.defaultProps = {
  timeout: 10000,
  className: '',
};

export default AppFlash;
