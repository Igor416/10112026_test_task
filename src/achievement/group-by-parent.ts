export function groupByParent<T>(
  parentIds: readonly string[],
  rows: readonly T[],
  parentIdOf: (row: T) => string,
): T[][] {
  const grouped = new Map<string, T[]>();

  for (const row of rows) {
    const parentId = parentIdOf(row);
    const group = grouped.get(parentId);

    if (!group) {
      grouped.set(parentId, []);
    } else {
      group.push(row);
    }
  }

  return parentIds.map((id) => grouped.get(id) ?? []);
}
