import type { Developer } from "./types";

export default function contarLosLenguajes(developers: Developer[]): Record<string, number> {
  const lenguages: Record<string, number> = developers.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.language]: acc[curr.language] + 1 || 1,
    }),
    {}
  );
  return lenguages;
}
