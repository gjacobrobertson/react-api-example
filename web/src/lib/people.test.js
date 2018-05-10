import * as people from './people';
import * as fixtures from '../fixtures/people';

describe('projection', () => {
  it('should normalize a person from an API response', () => {
    expect(people.projection(fixtures.data[0])).toEqual({
      id: 1,
      name: 'Test User',
      email: 'test.user@example.com',
      title: 'Tester',
    });
  });
});

describe('eachPage', () => {
  const handler = jest.fn();
  beforeAll(() => people.eachPage(handler));
  it('should invoke the handler on each page of the people API response', () => {
    expect(handler).toHaveBeenCalledTimes(fixtures.pages);
    expect(
      handler.mock.calls.map(
        ([payload]) => payload.metadata.paging.current_page
      )
    ).toEqual(
      Array(fixtures.pages)
        .fill()
        .map((_, i) => i + 1)
    );
  });
});

describe('eachPerson', () => {
  const handler = jest.fn();
  beforeAll(() => people.eachPerson(handler));
  it('should invoke the handler on each person across all pages', () => {
    expect(handler).toHaveBeenCalledTimes(
      fixtures.pages * fixtures.data.length
    );
    fixtures.data.forEach(person => {
      expect(handler).toHaveBeenCalledWith(person);
    });
  });
});
