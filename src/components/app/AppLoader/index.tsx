import clsx from 'clsx';
import './AppLoader.css';

interface AppLoaderProps {
  center?: boolean;
}

const AppLoader = (props: AppLoaderProps) => (
  <div className={clsx([{ 'flex items-center w-full': props.center }, 'h-full'])}>
    <div className="app-loader" />
  </div>
);

AppLoader.defaultProps = {
  center: false,
};

export default AppLoader;
