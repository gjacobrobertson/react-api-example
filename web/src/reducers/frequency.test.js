import reducer from './frequency';
import * as actions from '../actions/frequency';

let state = {};

describe('frequency reducer', () => {
  describe('count', () => {
    it('should count the letters in the word', () => {
      state = reducer(state, actions.count('FOO'));
      expect(state).toEqual({ F: 1, O: 2 });
    });
  });

  describe('countAll', () => {
    it('should count the letters in all of the words', () => {
      state = reducer(state, actions.countAll(['BAR', 'BAZ']));
      expect(state).toEqual({ F: 1, O: 2, B: 2, A: 2, R: 1, Z: 1 });
    });
  });

  describe('reset', () => {
    it('should reset the state', () => {
      state = reducer(state, actions.reset());
      expect(state).toEqual({});
    });
  });
});
