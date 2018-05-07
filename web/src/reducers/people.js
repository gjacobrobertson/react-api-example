import { handleActions } from 'redux-actions';
import * as peopleActions from '../actions/people';

const initial = { loaded: false };

export default handleActions(
  {
    [peopleActions.set]: (state, { payload }) => ({
      ...state,
      ...payload,
      loaded: true,
    }),
    [peopleActions.reset]: state => initial,
  },
  initial
);
