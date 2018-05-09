import { createAction } from 'redux-actions';
import { iteratePeople } from '../lib/people';

export const detect = createAction('DETECT_DUPLICATES');
export const start = createAction('START_DUPLICATES');
export const done = createAction('DONE_DUPLICATES');
export const build = () => async dispatch => {
  dispatch(start());
  for await (const person of iteratePeople()) {
    dispatch(detect(person));
  }
  dispatch(done());
};
