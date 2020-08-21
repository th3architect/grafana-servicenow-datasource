import { getSeriesNameFromRow } from './utils';

describe('utils', () => {
  it('getSeriesNameFromRow', () => {
    expect(getSeriesNameFromRow([])).toBe('');
    expect(getSeriesNameFromRow([10])).toBe('');
    expect(getSeriesNameFromRow([0])).toBe('');
    expect(getSeriesNameFromRow([null])).toBe('');
    expect(getSeriesNameFromRow(['foo', 10])).toBe('foo');
    expect(getSeriesNameFromRow(['foo', 0])).toBe('foo');
    expect(getSeriesNameFromRow(['foo', null])).toBe('foo');
    expect(getSeriesNameFromRow(['foo', 'bar', 10])).toBe('foo - bar');
    expect(getSeriesNameFromRow([10, 'bar', 10])).toBe('10 - bar');
    expect(getSeriesNameFromRow([0, 'bar', 10])).toBe('0 - bar');
    expect(getSeriesNameFromRow(['', 'bar', 10])).toBe('bar');
  });
});
