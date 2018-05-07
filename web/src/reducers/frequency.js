import { handleActions } from 'redux-actions';
import * as actions from '../actions/frequency';

const initial = {};

const increment = (state, key) => ({
  ...state,
  [key]: (state[key] || 0) + 1,
});

const apply = reducer => (state, payload) =>
  payload != null ? Array.from(payload).reduce(reducer, state) : state;

const unwrap = reducer => (state, { payload }) => reducer(state, payload);

export default handleActions(
  {
    [actions.count]: unwrap(apply(increment)),
    [actions.countAll]: unwrap(apply(apply(increment))),
    [actions.reset]: state => initial,
  },
  initial
);
