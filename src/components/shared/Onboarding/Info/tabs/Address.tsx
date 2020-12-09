import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AppFlash from '~/components/app/AppFlash';
import AppInput from '~/components/app/AppInput';
import AppSelect from '~/components/app/AppSelect';
import AppTabAction from '~/components/app/AppTab/AppTabAction';
import { AppDispatch } from '~/store';
import { getAddressAction, saveAddressAction } from '~/store/address';
import { AddressFormData } from '~/store/address/address.interface';
import useAddress from '~/store/address/useAddress';
import { transformValidationError } from '~/utils';
import { getCountrySelectOptions } from '~/utils/countries';
import { getStateSelectOptions } from '~/utils/states';
import './BasicInfo.scss';

const Address = () => {
  const address = useAddress();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<AddressFormData>({
    address: '',
    city: '',
    country: '',
    nationality: '',
    state_of_origin: '',
  });
  const [formError, setFormError] = useState<AddressFormData>({
    address: '',
    city: '',
    country: '',
    nationality: '',
    state_of_origin: '',
  });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAddressAction());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFormData({ ...address, state_of_origin: address.stateOfOrigin });
  }, [address]);

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      await dispatch(saveAddressAction(formData));
    } catch (error) {
      if (error.response.status === 422) {
        setFormError(transformValidationError(error.response.data));
      }

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h1 className="ma-0 text-title">Address</h1>

      <form className="white--bg px-10 py-11 mt-9">

        <AppFlash />

        <AppInput
          name="address"
          label="Residential Address"
          value={formData.address}
          onChange={onChange}
          placeholder="45 kisoloma isolo"
          hint={formError.address}
          hasError={!!formError.address}
          required
        />

        <AppInput
          name="city"
          label="City"
          value={formData.city}
          onChange={onChange}
          placeholder="Magodo"
          hint={formError.city}
          hasError={!!formError.city}
          required
        />

        <AppSelect
          items={getStateSelectOptions()}
          name="state_of_origin"
          label="State Of Origin"
          value={formData.state_of_origin}
          onChange={onChange}
          placeholder="Select"
          hint={formError.state_of_origin}
          hasError={!!formError.state_of_origin}
        />

        <AppSelect
          items={getCountrySelectOptions()}
          name="country"
          label="Country"
          value={formData.country}
          onChange={onChange}
          placeholder="Select"
          hint={formError.country}
          hasError={!!formError.country}
        />

        <AppInput
          name="nationality"
          label="Nationality"
          value={formData.nationality}
          onChange={onChange}
          placeholder="Nigerian"
          hint={formError.nationality}
          hasError={!!formError.nationality}
          required
        />
      </form>

      <AppTabAction isLoading={isLoading} onSubmit={onSubmit} />
    </>
  );
};

export default Address;
