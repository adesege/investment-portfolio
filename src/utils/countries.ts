import countryData from '../data/countries.json';

export const getCountries = () => countryData.map((s) => s);

export const getCountrySelectOptions = () => (
  countryData.map((item) => ({ text: item, value: item }))
);
