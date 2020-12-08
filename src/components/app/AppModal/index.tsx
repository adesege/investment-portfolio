import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import './AppModal.scss';

interface AppModalProps {
  open: boolean;
  header?: JSX.Element;
  fullScreen?: boolean;
  className?:string;
}

const AppModal = (props: PropsWithChildren<AppModalProps>) => createPortal(
  <div className={clsx(['app-modal', props.className, { 'app-modal__open': props.open, 'app-modal__fullscreen': props.fullScreen }])}>
    <div className="app-modal__container">
      {props.header && <div className="app-modal__header">{props.header}</div>}
      <div className="app-modal__body">{props.children}</div>
    </div>
  </div>,
  document.getElementById('modal'),
);

export default AppModal;
