export default function buscarAislado(numeros: number[]): number {
  let odd = 0;
  let even = 0;
  let oddCount = 0;
  let evenCount = 0;
  let i = 0;
  while (i < numeros.length) {
    if (numeros[i] % 2 === 0) {
      even = numeros[i];
      evenCount++;
    } else {
      odd = numeros[i];
      oddCount++;
    }
    if(evenCount && oddCount && evenCount + oddCount >= 3) {
      return evenCount === 1 ? even : odd
    }

    i++;
  }
  return 0;
}
