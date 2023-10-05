export default function posiblePalindromo(num: number): boolean {
  const numStr = num.toString();
  const count: { [key: string]: number } = {};
  for (let num of numStr) {
    count[num] = count[num] ? count[num] + 1 : 1;
  }
  return Object.values(count).filter((cou: number) => cou % 2 !== 0).length < 2;
}
