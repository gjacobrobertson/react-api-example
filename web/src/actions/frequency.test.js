import * as actions from './frequency';
import * as fixtures from '../fixtures/people';

describe('frequency action creators', () => {
  describe('build', () => {
    const dispatch = jest.fn();
    beforeAll(() => actions.build()(dispatch));

    it('should dispatch reset first', () => {
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: actions.reset.toString(),
      });
    });

    it('should dispatch countAll on each page', () => {
      expect(dispatch).toHaveBeenCalledTimes(fixtures.pages + 1);
      expect(dispatch).toHaveBeenCalledWith({
        type: actions.countAll.toString(),
        payload: [
          'TEST.USER@EXAMPLE.COM',
          'UNEMPLOYED@EXAMPLE.COM',
          'UN+EMP.LOYED1@OTHERDOMAIN.NET',
        ],
      });
    });
  });
});
