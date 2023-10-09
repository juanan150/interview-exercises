import type { Developer } from "./types";

export default function encontrarLaMedia(developers: Developer[]): number {
  return Math.round(developers.reduce((acc, curr) => acc + curr.age, 0) / developers.length);
}
