export default function letrasPorNumeros(string: string): string {
  const cleanString = string.split(" ").join("").toLowerCase().normalize("NFD");
  let result = "";
  for (let char of cleanString) {
    result += `${char.charCodeAt(0) - 96} `;
  }
  return result.trim();
}
