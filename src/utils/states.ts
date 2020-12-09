import stateData from '../data/states.json';

export const getStates = () => stateData;

export const getStateSelectOptions = () => (
  stateData.map((state) => ({ text: state, value: state }))
);
