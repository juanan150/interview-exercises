export default function girar(texto: string): string {
  const arr = texto
    .split(" ")
    .map((word) => (word.length >= 5 ? word.split("").reverse().join("") : word))
    .join(" ");
  return arr;
}
