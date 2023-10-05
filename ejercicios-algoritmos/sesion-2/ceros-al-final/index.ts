export default function moverCeros(array: unknown[]): unknown[] {
  const res = []
  let i = array.length
  let j = 0
  while (j < i){
    if (array[j] === 0){
      array.splice(j, 1)
      array.push(0)
      i--
    } else {
      j++
    }
  }
  return array;
}
