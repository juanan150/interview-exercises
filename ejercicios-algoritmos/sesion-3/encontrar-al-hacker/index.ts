import type { Estudiante } from "./types";

export default function encontrarHackers(estudiantes: Estudiante[]): string[] {
  const response: string[] = [];
  const grades = {
    A: 30,
    B: 20,
    C: 10,
    D: 5,
  };
  for (let stu of estudiantes) {
    let sum = stu[2].reduce((acc, curr) => acc + grades[curr], 0);
    if (stu[2].length >= 5 && !stu[2].some((el) => ["C", "D", "E"].includes(el))) sum += 20;
    if (sum > 200) sum = 200;
    if (sum !== stu[1]) response.push(stu[0])
  }
  return response;
}
