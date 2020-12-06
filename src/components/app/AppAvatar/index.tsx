import './AppAvatar.scss';

interface AppAvatarProps {
  src: string;
}

const AppAvatar = (props: AppAvatarProps) => (
  <div className="app-avatar" role="img" style={{ backgroundImage: `url(${props.src})` }} />
);

export default AppAvatar;
