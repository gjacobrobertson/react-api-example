import reducer from './duplicates';
import * as actions from '../actions/duplicates';
import * as fixtures from '../fixtures/people';

let state = { all: [1, 2], dupes: [[1, 2]], loading: false, loaded: true };

describe('people reducer', () => {
  describe('start', () => {
    beforeAll(() => {
      state = reducer(state, actions.start());
    });
    it('should set loading to true', () => {
      expect(state.loading).toBe(true);
      expect(state.loaded).toBe(false);
    });

    it('should reset state', () => {
      expect(state.all).toEqual([]);
      expect(state.dupes).toEqual([]);
    });
  });

  describe('detect', () => {
    beforeAll(() => {
      state = fixtures.data.map(actions.detect).reduce(reducer, state);
    });

    it('should detect duplicate people', () => {
      expect(state.dupes).toContainEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: 'Unemployed',
          }),
          expect.objectContaining({
            name: 'Duplicate',
          }),
        ])
      );
    });
  });

  describe('done', () => {
    let clone;
    beforeAll(() => {
      clone = JSON.parse(JSON.stringify(state));
      state = reducer(state, actions.done());
    });
    it('should set loaded to true', () => {
      expect(state.loading).toBe(false);
      expect(state.loaded).toBe(true);
    });

    it('should preserve state', () => {
      expect(state.all).toEqual(clone.all);
      expect(state.dupes).toEqual(clone.dupes);
    });
  });
});
