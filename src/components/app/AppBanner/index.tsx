import clsx from 'clsx';
import { PropsWithChildren, VFC } from 'react';
import { AppBannerType } from './appBanner';
import './AppBanner.scss';

interface AppBannerProps {
  icon: VFC,
  title: string;
  description?: string;
  action?: JSX.Element;
  type: AppBannerType
}

const AppBanner = (props: PropsWithChildren<AppBannerProps>) => {
  const Icon = props.icon;

  return (
    <div className={clsx([
      'app-banner',
      {
        'app-banner__info': props.type === AppBannerType.info,
      },
    ])}
    >
      <Icon />

      <div>
        <h1 className="app-banner__title">{props.title}</h1>
        <p className="app-banner__description">{props.description || props.children}</p>
        <div className="app-banner__action">{props.action}</div>
      </div>
    </div>
  );
};

export default AppBanner;
