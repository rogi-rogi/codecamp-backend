export function getToday() {
  const cur = new Date();
  const yyyy = cur.getFullYear();
  const mm = cur.getMonth() + 1;
  const dd = cur.getDate();

  return `${yyyy}-${mm}-${dd}`;
}
