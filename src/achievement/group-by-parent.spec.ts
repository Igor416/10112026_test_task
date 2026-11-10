import { describe, expect, it } from 'vitest';
import { groupByParent } from './group-by-parent.js';

describe('groupByParent', () => {
  it('раскладывает строки по id родителя и сохраняет порядок ключей', () => {
    const rows = [
      { experienceId: 'exp-2', text: 'второй' },
      { experienceId: 'exp-1', text: 'первый' },
      { experienceId: 'exp-1', text: 'ещё первый' },
    ];

    expect(
      groupByParent(
        ['exp-1', 'exp-2', 'exp-3'],
        rows,
        (row) => row.experienceId,
      ),
    ).toEqual([
      [
        { experienceId: 'exp-1', text: 'первый' },
        { experienceId: 'exp-1', text: 'ещё первый' },
      ],
      [{ experienceId: 'exp-2', text: 'второй' }],
      [],
    ]);
  });
});
