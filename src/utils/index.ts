import axios from 'axios';

export const setAuthorizationToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};

export const getAuthToken = (): string => localStorage.getItem('authToken');

export const transformValidationError = (error: Record<string, string>) => (
  Object.keys(error)
    .reduce((prevValue: any, currentValue: string) => {
      // eslint-disable-next-line prefer-destructuring
      prevValue[currentValue] = error[currentValue][0];
      return prevValue;
    }, {})
);

export const clickOutsideListener = (
  element: HTMLElement,
  callback: CallableFunction,
) => (event: any): any => {
  if (!element.contains(event.target)) {
    callback();
  }
};
