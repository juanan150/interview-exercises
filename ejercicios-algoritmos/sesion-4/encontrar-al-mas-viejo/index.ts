import type { Developer } from "./types";

export default function encontrarAlMasViejo(developers: Developer[]): Developer[] {
  return developers.reduce((acc: Developer[], curr: Developer): Developer[] => {
    if (!acc.length) {
      return [curr]
    }
    if (curr.age > acc[0].age) {
      return [curr]
    }
    if (curr.age === acc[0].age) {
      return [...acc, curr]
    }
    return acc
  }, []);
}
