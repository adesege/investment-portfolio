import { Link } from 'react-router-dom';
import AppBanner from '~/components/app/AppBanner';
import { AppBannerType } from '~/components/app/AppBanner/appBanner';
import AppButton from '~/components/app/AppButton';
import AppSpacer from '~/components/app/AppSpacer';
import IconArrowEast from '~/components/icons/IconArrowEast';
import IconEnvelopeCircle from '~/components/icons/IconEnvelopeCircle';
import IconUserCircle from '~/components/icons/IconUserCircle';
import useAuth from '~/hooks/use-auth';
import { IRoute } from '~/interfaces/route';
import './Dashboard.scss';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <section className="dashboard">
      <div className="dashboard__header">
        <div>
          <h1 className="dashboard__title text-heading secondary">
            Welcome
            {' '}
            {user.firstname}
          </h1>
          <p className="dashboard__description text-subheading muted">Good to have you on board, get started with the actions below</p>
        </div>

        <AppSpacer />

        <AppButton className="primary--bg">+ Invest</AppButton>
      </div>

      <div className="dashboard__banners">
        <div className="dashboard__banner">
          <AppBanner type={AppBannerType.info} title="Action 1: Verify your email" icon={IconEnvelopeCircle}>
            <span>
              {`We sent an email to ${user.email}. Check your inbox and click the button to verify your account. Didn’t get a mail?`}
            </span>
            &nbsp;&nbsp;&nbsp;
            <Link to="/resend" className="primary font-normal">Resend</Link>
          </AppBanner>
        </div>
        <div className="dashboard__banner">
          <AppBanner
            type={AppBannerType.info}
            title="Action 2: Verify your Identity"
            icon={IconUserCircle}
            description="To access the amazing investment business experience, Kindly help us to know you better"
            action={<AppButton to={IRoute.onboarding} label="Start Now" className="primary font-medium" append={<IconArrowEast />} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
