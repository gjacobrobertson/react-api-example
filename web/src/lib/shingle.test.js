import shingle from './shingle';

describe(shingle, () => {
  it('should get the shingles of a word', () => {
    expect(shingle(3)('abcdabc')).toEqual(
      new Set(['abc', 'bcd', 'cda', 'dab'])
    );
  });

  it('should return empty set when word length is too low', () => {
    expect(shingle(3)('')).toEqual(new Set());
    expect(shingle(5)('abcd')).toEqual(new Set());
  });
});
