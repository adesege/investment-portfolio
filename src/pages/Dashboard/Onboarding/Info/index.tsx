import { lazy } from 'react';
import AppModal from '~/components/app/AppModal';
import AppTab from '~/components/app/AppTab';
import Header from '~/components/shared/Onboarding/Header';
import './Info.scss';

const BasicInfo = lazy(() => import(/* webpackChunkName: "onboarding/tabs/basic-info" */ '~/components/shared/Onboarding/Info/tabs/BasicInfo'));
const Address = lazy(() => import(/* webpackChunkName: "onboarding/tabs/address" */ '~/components/shared/Onboarding/Info/tabs/Address'));

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
      tab: Address,
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
      <AppTab tab={1} items={tabItems} />
    </AppModal>
  );
};

export default Info;
