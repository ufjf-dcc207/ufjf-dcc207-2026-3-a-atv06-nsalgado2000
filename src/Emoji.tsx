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
  function alimentarClick() {}
  function hidratarClick() {}
  function alternarLuzClick() {}

  function cicloClick() {}

  return (
    <>
      <div className="emoji">
        <div className="face">{EMOJI_MAP.get(status) || "👻"}</div>
        <div className="atributos">
          <Atributo icone="❤️" />
          <Atributo icone="🍗" />
          <Atributo icone="💦" />
          <Atributo icone="⚡" />
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
