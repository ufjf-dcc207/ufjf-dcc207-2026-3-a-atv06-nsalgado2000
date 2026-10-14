import { useState } from "react";
//import "./Atributo.css";

type AtributoProps = {
  icone: string;
};

type ValoresPossiveis = 1 | 2 | 3 | 4 | 5;

export default function Atributo({ icone }: AtributoProps) {
  const [valor, setValor] = useState(0);

  function onValueUp() {
    if (valor === 5) {
      setValor(0);
    } else {
      setValor(valor + 1);
    }
  }

  return (
    <div className="atributo">
      <span className="ativo">{icone.repeat(valor)}</span>
      <span className="inativo">{icone.repeat(5 - valor)}</span>
      <button onClick={onValueUp}>+</button>
    </div>
  );
}

function updateValor(prevValor: ValoresPossiveis) {
  if (prevValor === 5) {
    return 0;
  } else return prevValor + 1;
}
