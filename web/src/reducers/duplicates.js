import { handleActions } from 'redux-actions';
import * as actions from '../actions/duplicates';
import shingle from '../lib/shingle';
import jaccard from '../lib/jaccard';
import { projection } from '../lib/people';

const initial = {
  all: [],
  dupes: [],
  loading: false,
  loaded: false,
};

const fingerprint = str =>
  str
    .split('@')[0]
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

const threshold = 0.5;
const shingleSize = 3;
const shingler = shingle(shingleSize);
const similarity = (a, b) => jaccard(shingler(a), shingler(b));
const match = (a, b) => similarity(a.signature, b.signature) >= threshold;

export default handleActions(
  {
    [actions.start]: state => ({ ...initial, loading: true, loaded: false }),
    [actions.done]: state => ({ ...state, loading: false, loaded: true }),
    [actions.detect]: (state, { payload }) => {
      const person = {
        ...projection(payload),
        signature: fingerprint(payload.email_address || ''),
      };
      const dupes = state.all
        .filter(match.bind(null, person))
        .map(candidate => [person, candidate]);
      return {
        ...state,
        all: [...state.all, person],
        dupes: [...state.dupes, ...dupes],
      };
    },
  },
  initial
);
