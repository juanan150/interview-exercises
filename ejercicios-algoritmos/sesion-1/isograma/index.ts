export default function esIsograma(string: string): boolean {
  // TODO: implement
  if (string.includes(" ")) return false;
  const cleanString = string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const validated = {};
  for (let o of cleanString) {
    if (!validated[o]) {
      validated[o] = 1;
    } else {
      return false;
    }
  }

  return true;
}
