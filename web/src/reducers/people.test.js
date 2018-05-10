import reducer from './people';
import * as actions from '../actions/people';

let state = { loaded: false };

describe('people reducer', () => {
  describe('set', () => {
    beforeAll(() => {
      state = reducer(state, actions.set({ foo: 'bar' }));
    });
    it('should merge the payload into the state', () => {
      expect(state.foo).toEqual('bar');
    });

    it('should set loaded to true', () => {
      expect(state.loaded).toBe(true);
    });
  });

  describe('reset', () => {
    it('should reset the state', () => {
      state = reducer(state, actions.reset());
      expect(state).toEqual({ loaded: false });
    });
  });
});
