import * as actions from './people';
import * as fixtures from '../fixtures/people';

describe('people action creators', () => {
  describe('load', () => {
    const dispatch = jest.fn();
    beforeAll(() => actions.load({ page: 2 })(dispatch));

    it('should dispatch reset first', () => {
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: actions.reset.toString(),
      });
    });

    it('should dispatch set on the response data', () => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenLastCalledWith({
        type: actions.set.toString(),
        payload: fixtures.list({ params: new URLSearchParams({ page: 2 }) }),
      });
    });
  });
});
