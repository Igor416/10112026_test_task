export function formatPeriod(startDate: Date, endDate: Date | null): string {
  const end = endDate ? formatMonth(endDate) : 'по настоящее время';
  return `${formatMonth(startDate)} — ${end}`;
}

function formatMonth(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}
