import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import AppCheckboxGroup from '~/components/app/AppCheckboxGroup';
import AppCheckboxWithLabel from '~/components/app/AppCheckboxWithLabel';
import AppDatePicker from '~/components/app/AppDatePicker';
import AppFlash from '~/components/app/AppFlash';
import AppInput from '~/components/app/AppInput';
import AppTabAction from '~/components/app/AppTab/AppTabAction';
import IconFemale from '~/components/icons/IconFemale';
import IconMale from '~/components/icons/IconMale';
import useAuth from '~/hooks/use-auth';
import { AppDispatch } from '~/store';
import { saveBasicInfoAction } from '~/store/auth';
import { BasicInfoFormData } from '~/store/auth/auth.interface';
import { transformValidationError } from '~/utils';
import './BasicInfo.scss';

const BasicInfo = () => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<BasicInfoFormData>({
    date_of_birth: user.dateOfBirth,
    gender: user.gender,
    mother_maiden_name: user.motherMaidenName,
    phone_number: user.phoneNumber,
    middlename: user.middleName,
  });
  const [formError, setFormError] = useState<BasicInfoFormData>({
    date_of_birth: '',
    gender: '',
    mother_maiden_name: '',
    phone_number: '',
    middlename: '',
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      await dispatch(saveBasicInfoAction(formData));
    } catch (error) {
      if (error.response.status === 422) {
        setFormError(transformValidationError(error.response.data));
      }

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const onGenderChange = (value: string) => setFormData({ ...formData, gender: value });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h1 className="ma-0 text-title">Basic Info</h1>

      <form className="white--bg px-10 py-11 mt-9">

        <AppFlash />

        <AppInput
          name="middlename"
          label="Middle Name"
          value={formData.middlename}
          onChange={onChange}
          placeholder="Michael"
          hint={formError.middlename}
          hasError={!!formError.middlename}
          required
        />

        <AppDatePicker
          name="date_of_birth"
          label="Date Of Birth"
          value={formData.date_of_birth}
          onInput={onChange}
          placeholder="July 23 1987"
          hint={formError.date_of_birth}
          hasError={!!formError.date_of_birth}
          required
        />
        <AppInput
          name="phone_number"
          label="Primary Phone Number"
          value={formData.phone_number}
          onChange={onChange}
          placeholder="70563296578"
          hint={formError.phone_number}
          hasError={!!formError.phone_number}
          prepend="+234"
          prependDivider
          required
        />
        <div className="app-input__group">
          <p className="text-body secondary ma-0">Gender </p>
          <AppCheckboxGroup
            className="do-basic-info__gender"
            group
            mandatory
            onChange={onGenderChange}
            hint={formError.gender}
            hasError={!!formError.gender}
          >
            <AppCheckboxWithLabel label="Male" value="male" checked={formData.gender === 'male'} icon={IconMale} />
            <AppCheckboxWithLabel label="Female" value="female" checked={formData.gender === 'female'} icon={IconFemale} />
          </AppCheckboxGroup>
        </div>

        <AppInput
          name="mother_maiden_name"
          label="Mother’s Maiden Name"
          value={formData.mother_maiden_name}
          onChange={onChange}
          placeholder="Balogun"
          hint={formError.mother_maiden_name}
          hasError={!!formError.mother_maiden_name}
          required
        />
      </form>

      <AppTabAction isLoading={isLoading} onSubmit={onSubmit} />
    </>
  );
};

export default BasicInfo;
