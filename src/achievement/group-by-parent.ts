export function groupByParent<T>(
  parentIds: readonly string[],
  rows: readonly T[],
  parentIdOf: (row: T) => string,
): T[][] {
  const grouped = new Map<string, T[]>();

  for (const id of parentIds) {
    grouped.set(id, []);
  }

  for (const row of rows) {
    grouped.get(parentIdOf(row))?.push(row);
  }

  return parentIds.map((id) => grouped.get(id) ?? []);
}
