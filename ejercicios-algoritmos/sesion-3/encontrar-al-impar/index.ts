export default function encontrarImpar(numeros: number[]): number {
  const resp: { [key: string]: number } = {};
  for (let num of numeros) {
    resp[num] = resp[num] + 1 || 1;
  }
  return parseInt(Object.keys(resp).filter((vals) => resp[vals] % 2 !== 0)[0]) ?? -1;
}
