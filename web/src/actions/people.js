import { createAction } from 'redux-actions';
import axios from 'axios';

export const set = createAction('SET_PEOPLE');
export const reset = createAction('RESET_PEOPLE');
export const load = query => async dispatch => {
  dispatch(reset());
  const params = new URLSearchParams(query);
  params.set('include_paging_counts', 'true');
  const response = await axios.get('/api/v2/people.json', { params });
  return dispatch(set(response.data));
};
