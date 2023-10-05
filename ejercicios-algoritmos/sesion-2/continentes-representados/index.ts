type Registry = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
  greeting?() : string
};
type NewReg = Registry & { greeting(): string}

export default function continentesRepresentados(array: Registry[]): boolean {
  const conts = new Set();
  for (let per of array) {
    conts.add(per.continent);
  }
  return Array.from(conts).length === 5;
}

export function devsEuropa(array: Registry[]): number {
  return array.filter((per) => per.continent === "Europe").length;
}

export function transformArray(array: Registry[]): NewReg[] {
  return array.map((person) => ({
    ...person,
    greeting() {
      return `Hi, ${this.firstName}, what do you like the most about ${this.language}`;
    },
  }));
}
