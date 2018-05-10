import jaccard from './jaccard';

it('should return 1 for identical sets', () => {
  expect(jaccard(new Set(['a', 'b']), new Set(['b', 'a']))).toEqual(1);
});

it('should return 0 for disjoint sets', () => {
  expect(jaccard(new Set(['a', 'b']), new Set(['c', 'd']))).toEqual(0);
});

it('should return intersection over union', () => {
  expect(jaccard(new Set(['a', 'b']), new Set(['b', 'c']))).toEqual(1 / 3);
});
