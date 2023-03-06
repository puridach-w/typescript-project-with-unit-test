import { merge } from './merge';

describe('merge function', () => {
  it('should merge two sorted collections', () => {
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return empty array when both collections are empty', () => {
    expect(merge([], [])).toEqual([]);
  });

  it('should merge two collections when one collection is empty', () => {
    expect(merge([1, 3, 5], [])).toEqual([1, 3, 5]);
  });

  it('should merge two collections when both collections have duplicate values', () => {
    expect(merge([1, 2, 2, 3, 5], [2, 3, 4, 5, 6])).toEqual([1, 2, 2, 3, 3, 4, 5, 5, 6]);
  });

  it('should merge two collections with unequal length', () => {
    expect(merge([1, 2, 3, 5], [4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
