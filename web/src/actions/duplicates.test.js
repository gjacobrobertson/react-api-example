import * as actions from './duplicates';
import * as fixtures from '../fixtures/people';

describe('duplicates action creators', () => {
  describe('build', () => {
    const dispatch = jest.fn();
    beforeAll(() => actions.build()(dispatch));
    it('should dispatch start first', () => {
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: actions.start.toString(),
      });
    });

    it('should dispatch detect on each person', () => {
      expect(dispatch).toHaveBeenCalledTimes(
        fixtures.data.length * fixtures.pages + 2
      );

      for (const person of fixtures.data) {
        expect(dispatch).toHaveBeenCalledWith({
          type: actions.detect.toString(),
          payload: person,
        });
      }

      it('should dispatch done last', () => {
        expect(dispatch).toHaveBeenLastCalledWith({
          type: actions.done.toString(),
        });
      });
    });
  });
});
