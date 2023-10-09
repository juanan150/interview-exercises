export default function contarDuplicados(texto: string): number {
  let counter: { [key: string]: number } = {};
  const sanitizedText = texto.toLocaleLowerCase();
  for (let char of sanitizedText) {
    counter[char] = counter[char] + 1 || 1;
  }
  return Object.entries<number>(counter).filter((pair) => pair[1] > 1).length;
}
