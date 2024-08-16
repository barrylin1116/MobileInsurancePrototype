import _ from 'lodash';
import { UseReactFormHookErrorProps } from './types';

const useReactFormHook = ({ name, errors }: UseReactFormHookErrorProps) => {
  const errorMessages = _.get(errors, name + '.message');
  const hasError = !!(errors && errorMessages);

  return {
    hasError, errorMessages
  };
};

export default useReactFormHook;
