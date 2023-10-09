import type { Emocion } from "./types";

export default function ordenarEmociones(emociones: Emocion[], orden: boolean): Emocion[] {
  let resp: Emocion[] = [];
  const feelings: { [key in Emocion]: number } = {
    ":D": 1,
    ":)": 2,
    ":|": 3,
    ":(": 4,
    "T_T": 5,
  };
  if (orden) {
    resp = emociones
      .sort((a, b) => feelings[a] - feelings[b])
  } else {
    resp = emociones
    .sort((a, b) => feelings[b] - feelings[a]);
  }
  return resp;
}
