import { createAction } from 'redux-actions';
import iteratePeople from '../lib/iteratePeople';

export const count = createAction('COUNT_FREQUENCY');
export const reset = createAction('RESET_FREQUENCY');
export const build = () => async dispatch => {
  dispatch(reset());
  for await (const person of iteratePeople()) {
    if (person.email_address) {
      dispatch(count(person.email_address.toUpperCase()));
    }
  }
};
