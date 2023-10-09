import type { Developer } from "./types";

export default function pedirDetalles(developers: Developer[]): Developer[] {
  const devs = developers.filter((dev) => Object.values(dev).includes(null));
  for (let dev of devs) {
    const value = Object.entries(dev).filter((d) => d[1] === null)[0][0];
    dev.question = `Hi, could you please provide your ${value}.`;
  }
  return devs;
}
