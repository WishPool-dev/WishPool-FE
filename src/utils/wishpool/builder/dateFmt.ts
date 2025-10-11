// preview 세션 스토리지에서 받아온 date슬래시로 바꾸기
//YYYY/MM/DD
export function getSlashDateFmt(date?: string) {
  if (!date) return '—';
  try {
    const [y, m, d] = date.split('-');
    if (y && m && d) return `${y}/${m}/${d}`;
    return date;
  } catch {
    return date;
  }
}

//YYYY-MM-DD
export function getDashDateFmt(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function parseYMD(s: string | null): Date | null {
  if (!s) return null;
  const [y, m, d] = s.split(/[-/]/).map(Number);
  const dt = new Date(y, (m ?? 1) - 1, d ?? 1);
  return Number.isNaN(dt.getTime()) ? null : dt;
}
