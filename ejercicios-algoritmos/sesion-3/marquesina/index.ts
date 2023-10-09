export default function marquesina(texto: string): string[] {
  const resp: string[] = []
  for (let i = 0; i < texto.length; i++){
    texto = `${texto.slice(1)}${texto[0]}`
    resp.push(texto)
  }
  return resp;
}
