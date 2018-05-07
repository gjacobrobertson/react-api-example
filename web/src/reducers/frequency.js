import { handleActions } from 'redux-actions';
import * as actions from '../actions/frequency';

const initial = {};

const increment = (state, key) => ({
  ...state,
  [key]: (state[key] || 0) + 1,
});

export default handleActions(
  {
    [actions.count]: (state, { payload }) =>
      Array.from(payload).reduce(increment, state),
    [actions.reset]: state => initial,
  },
  initial
);
