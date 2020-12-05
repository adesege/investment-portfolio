import clsx from 'clsx';
import { IFlashTypes } from '~/store/flash/flash.interface';
import './AppAlert.scss';

interface AppAlertProps {
  messages: string[];
  type: IFlashTypes;
  className?: string;
}

const AppAlert = (props: AppAlertProps) => {
  const getFlashType = (type: IFlashTypes) => {
    switch (type) {
      case IFlashTypes.error:
        return 'app-alert__error';
      case IFlashTypes.info:
        return 'app-alert__info';
      default: return '';
    }
  };

  return (
    <div className={clsx(['app-alert', getFlashType(props.type), props.className])} role="alert">
      {props.messages.map((message) => (<p key={message}>{message}</p>))}
    </div>
  );
};

AppAlert.defaultProps = {
  className: '',
};

export default AppAlert;
