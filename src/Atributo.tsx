import { useState } from "react";
//import "./Atributo.css";

type AtributoProps = {
  icone: string;
  valor: number;
};

export default function Atributo({ icone, valor }: AtributoProps) {
  //const [valor, setValor] = useState(0);

  return (
    <div className="atributo">
      {valor}
      {icone.repeat(valor)}
      <span className="inativo">{icone.repeat(5 - valor)}</span>
    </div>
  );
}
