import clsx from 'clsx';
import {
  ChangeEvent, PropsWithChildren,
} from 'react';
import IconArrowEast from '~/components/icons/IconArrowEast';
import IconArrowWest from '~/components/icons/IconArrowWest';
import AppButton from '../AppButton';
import AppSpacer from '../AppSpacer';
import useTab from './useTab';

interface AppTabActionProps {
  isLoading?: boolean;
  onSubmit: () => Promise<void>;
}

const AppTabAction = (props: PropsWithChildren<AppTabActionProps>) => {
  const {
    tabIndex,
    onChange: onChangeTabIndex,
    onSetCompletedTab,
    onSetErrorTab,
    items: tabs,
    isFirstTab,
  } = useTab();

  const onClick = async (delta: number) => {
    const oldTabIndex = tabIndex;
    const newTabIndex = tabIndex + delta;

    if (newTabIndex < 0) {
      return;
    }

    try {
      if (Math.sign(delta) === 1) {
        await props.onSubmit();
      }

      onSetCompletedTab(oldTabIndex);

      if (tabs.length === newTabIndex) {
        return;
      }

      onChangeTabIndex(newTabIndex);
    } catch (error) {
      onSetErrorTab(oldTabIndex);
    }
  };

  const onNext = (event: ChangeEvent<HTMLButtonElement>) => {
    event.preventDefault();

    onClick(1);
  };

  const onPrevious = (event: ChangeEvent<HTMLButtonElement>) => {
    event.preventDefault();

    onClick(-1);
  };

  return (
    <div className={clsx(['app-tab-action', { 'justify-end': isFirstTab, 'justify-between': !isFirstTab }])}>
      {!isFirstTab && (
      <AppButton
        type="submit"
        size="big"
        label="Previous"
        className="app-tab-action__button app-tab-action__previous"
        onClick={onPrevious}
        variant="secondary"
        prepend={(
          <>
            <IconArrowWest />
            <AppSpacer />
          </>
        )}
        append={<AppSpacer />}
      />
      )}

      <AppButton
        type="submit"
        size="big"
        label="Save & Continue"
        className="app-tab-action__button app-tab-action__submit"
        onClick={onNext}
        disabled={props.isLoading}
        variant="primary"
        append={(
          <>
            <AppSpacer />
            <IconArrowEast />
          </>
        )}
        prepend={<AppSpacer />}
      />
    </div>
  );
};

export default AppTabAction;
