import { lazy } from 'react';
import AppModal from '~/components/app/AppModal';
import AppTab from '~/components/app/AppTab';
import Header from '~/components/shared/Onboarding/Header';
import './Info.scss';

const BasicInfo = lazy(() => import(/* webpackChunkName: "onboarding/tabs/basic-info" */ '~/components/shared/Onboarding/Info/tabs/BasicInfo'));

const Info = () => {
  const tabItems = [
    {
      title: 'Basic Information',
      description: 'Please tell us a bit about yourself',
      tab: BasicInfo,
    },
    {
      title: 'Address',
      description: 'We would like to know your origin',
      tab: BasicInfo,
    },
    {
      title: 'Next of Kin',
      description: 'Tell us about someone close to you',
      tab: BasicInfo,
    },
    {
      title: 'Bank Details',
      description: 'Share your bank detail for transactions',
      tab: BasicInfo,
    },
    {
      title: 'Verification Documents',
      description: 'Your bio will be verified using this documents',
      tab: BasicInfo,
    },
  ];

  return (
    <AppModal
      open
      fullScreen
      className="do-info"
      header={<Header title="We need to know you to serve you better" />}
    >
      <AppTab items={tabItems} />
    </AppModal>
  );
};

export default Info;
