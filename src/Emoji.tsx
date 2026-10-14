import { useState } from "react";
import Atributo from "./Atributo";

type EMOJI_KEYS = "happy" | "sick" | "dead";
const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
  ["happy", "🙂"],
  ["sick", "🤢"],
  ["dead", "💀"],
]);

export default function Emoji() {
  const [status, setStatus] = useState<EMOJI_KEYS>("sick");
  const [vida, setVida] = useState<number>(5);
  const [comida, setComida] = useState<number>(4);
  const [energia, setEnergia] = useState<number>(1);
  const [agua, setAgua] = useState<number>(2);

  function alimentarClick() {
    setComida(comida + 1);
  }
  function hidratarClick() {
    setAgua(agua + 1);
  }
  function alternarLuzClick() {}

  function cicloClick() {}

  return (
    <>
      <div className="emoji">
        <div className="face">{EMOJI_MAP.get(status) || "👻"}</div>
        <div className="atributos">
          <Atributo icone="❤️" valor={vida} />
          <Atributo icone="🍗" valor={comida} />
          <Atributo icone="💦" valor={agua} />
          <Atributo icone="⚡" valor={energia} />
        </div>

        <div className="acoes">
          <button onClick={alimentarClick}>Alimentar</button>
          <button onClick={hidratarClick}>Hidratar</button>
          <button onClick={alternarLuzClick}>Ligar Luz</button>
          <button onClick={cicloClick}>Ciclo</button>
        </div>
      </div>
    </>
  );
}
