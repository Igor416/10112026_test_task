import { describe, expect, it } from 'vitest';
import { formatPeriod } from './period.js';

describe('formatPeriod', () => {
  it('оставляет открытый конец у текущей работы', () => {
    expect(formatPeriod(new Date('2024-02-01T00:00:00.000Z'), null)).toBe(
      '2024-02 — по настоящее время',
    );
  });

  it('форматирует обе даты в UTC', () => {
    expect(
      formatPeriod(
        new Date('2022-06-01T00:00:00.000Z'),
        new Date('2024-01-01T00:00:00.000Z'),
      ),
    ).toBe('2022-06 — 2024-01');
  });
});
