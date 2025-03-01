import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppButton from '~/components/app/AppButton';
import AppCheckboxGroup from '~/components/app/AppCheckboxGroup';
import AppModal from '~/components/app/AppModal';
import AppSpacer from '~/components/app/AppSpacer';
import IconArrowEast from '~/components/icons/IconArrowEast';
import AccountType from '~/components/shared/Onboarding/AccountType';
import Header from '~/components/shared/Onboarding/Header';
import { IRoute } from '~/interfaces/route';
import './Onboarding.scss';

const Onboarding = () => {
  const accountTypes = [
    {
      title: 'Pop Account',
      value: 'pop',
      src: '/gift-box.svg',
      description: 'You are less than 25 and looking to get a head start in the journey to financial freedom. Pop over and start small to earn more',
      features: [
        'Maximum deposit: N20,000.00 at a time',
        'Maximum withdrawal: N30,000.00 daily',
        'Maximum balance: N200,000.00',
      ],
    },
    {
      title: 'Groove Account',
      value: 'groove',
      src: '/leather-bag.svg',
      description: 'As a young professional starting out your career, now is the time to save more, earn more and find  your groove in the financial market',
      features: [
        'Maximum deposit: N30,000.00 at a time',
        'Maximum withdrawal: N50,000.00 daily',
        'Maximum balance: N400,000.00',
      ],
    },
    {
      title: 'Classic Account',
      value: 'classic',
      src: '/suit.svg',
      description: 'You are less than 25 and looking to get a head start in the journey to financial freedom. Pop over and start small to earn more',
      className: 'dashboard-onboarding__account--classic',
      features: [
        'Maximum deposit: N30,000.00 at a time',
        'Maximum withdrawal: N50,000.00 daily',
        'Maximum balance: N400,000.00',
      ],
    },
  ];

  const [accountType, setAccountType] = useState('');
  const history = useHistory();

  const onChange = (type: string) => setAccountType(type);
  const onSave = () => history.push(IRoute.onboardingInfo);

  return (
    <AppModal open fullScreen className="dashboard-onboarding" header={<Header title="Your gateway to amazing investment opportunities" />}>
      <h1 className="text-title dashboard-onboarding__title mt-0">Select Account Type</h1>

      <AppCheckboxGroup mandatory group onChange={onChange}>
        {accountTypes.map((type) => (
          <AccountType
            key={type.title}
            checked={accountType === type.value}
            value={type.value}
            src={type.src}
            title={type.title}
            className={type.className}
            description={type.description}
            features={type.features}
          />
        ))}
      </AppCheckboxGroup>

      <AppButton
        size="big"
        label="Save & Continue"
        variant="primary"
        className="w-full justify-between dashboard-onboarding__button--submit"
        onClick={onSave}
        append={(
          <>
            <AppSpacer />
            <IconArrowEast />
          </>
        )}
        prepend={<AppSpacer />}
      />

    </AppModal>
  );
};

export default Onboarding;
