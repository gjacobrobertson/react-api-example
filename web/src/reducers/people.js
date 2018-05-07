import { handleActions } from 'redux-actions';
import * as actions from '../actions/people';

const initial = { loaded: false };

export default handleActions(
  {
    [actions.set]: (state, { payload }) => ({
      ...state,
      ...payload,
      loaded: true,
    }),
    [actions.reset]: state => initial,
  },
  initial
);
