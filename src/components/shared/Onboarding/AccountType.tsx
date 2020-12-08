import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import AppCheckbox from '~/components/app/AppCheckbox';
import './AccountType.scss';

interface AccountTypeProps {
  title: string;
  description: string;
  features: string[];
  checked: boolean;
  src: string;
  value: string;
  className?: string;
}

const AccountType = (props: AccountTypeProps) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    ref.current.style.setProperty('--account-type-src', `url(${props.src})`);
  }, [props.src]);

  return (
    <div ref={ref} className={clsx(['do-account', props.className])}>
      <AppCheckbox name="type" value={props.value} checked={props.checked} />
      <div className="do-account__content">
        <h3 className="ma-0 do-account__title secondary">{props.title}</h3>
        <p className="font-light muted">{props.description}</p>
        <div className="do-account__features">
          <p className="ma-0 mr-4">Features:</p>
          <ul className="do-account__features--list muted">
            {props.features.map((feature) => <li key={feature} className="font-light do-account__features--item">{feature}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

AccountType.defaultProps = {
  className: '',
};

export default AccountType;
