export default function validarParéntesis(parentesis: string): boolean {
  let count = 0;
  for (let char of parentesis) {
    if (char === "(") count++;
    if (char === ")") count--;
    if (count < 0) return false;
  }
  return count === 0;
}
