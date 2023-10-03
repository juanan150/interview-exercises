export default function filtrarPares(array: string[] | number[]): unknown[] {
  const pairElems = {};
  for (let el of array) {
    pairElems[el] = pairElems[el] ? pairElems[el] + 1 : 1;
  }

  return Object.entries<number>(pairElems)
    .filter((pair) => pair[1] % 2 === 0)
    .map((pair) => +pair[0] || pair[0]);
}
