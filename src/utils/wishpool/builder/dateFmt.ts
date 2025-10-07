export function fmt(date?: string) {
  if (!date) return '—';
  try {
    const [y, m, d] = date.split('-');
    if (y && m && d) return `${y}.${m}.${d}`;
    return date;
  } catch {
    return date;
  }
}
