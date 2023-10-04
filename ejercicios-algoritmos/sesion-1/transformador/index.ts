type Input = {
  nombres: string[];
  edades: number[];
};

type Output = {
  id: number;
  nombre: string;
  edad: number;
};

export default function transformador(input: Input): Output[] {
  const res: Output[] = [];
  for (let i = 0; i < input.nombres.length; i++) {
    res.push({
      id: i + 1,
      nombre: `${input.nombres[i]}`,
      edad: input.edades[i],
    });
  }
  return res;
}
