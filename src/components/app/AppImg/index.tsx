import clsx from 'clsx';

interface AppImgProps {
  src:string;
  alt: string;
  className?: string;
}
const AppImg = (props: AppImgProps) => (
  <img className={clsx(['app-img', props.className])} src={props.src} alt={props.alt} />
);

AppImg.defaultProps = {
  className: '',
};

export default AppImg;
