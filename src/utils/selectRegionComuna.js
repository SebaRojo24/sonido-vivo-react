import { useState } from "react";
import { regionesYComunas } from "../data/regionesYComunas";

export function selectRegionComuna() {
  const [region, setRegion] = useState("");
  const [comuna, setComuna] = useState("");

  const cambiarRegion = (evento) => {
    setRegion(evento.target.value);
    setComuna("");
  };

  const cambiarComuna = (evento) => {
    setComuna(evento.target.value);
  };

  //Manuel: Explicar uso de find en lugar de filter.
  const objetoRegion = regionesYComunas.find((item) => item.region === region);

  //Explicar uso de operador ternario acá.
  const comunasDisponibles = objetoRegion
  ?. comunas 
  || [];

  return {
    region,
    comuna,
    comunasDisponibles,
    cambiarRegion,
    cambiarComuna,
  };
}