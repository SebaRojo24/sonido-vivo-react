export function selectorRegionComuna(regionNombre, lista) {
  if (!regionNombre) return [];
  const encontrada = lista.find((item) => item.region === regionNombre);
  return encontrada ? encontrada.comunas : [];
}