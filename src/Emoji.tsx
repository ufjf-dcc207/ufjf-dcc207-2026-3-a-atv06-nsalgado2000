type EMOJI_KEYS = "happy" | "sick" | "dead";
const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
  ["happy", "🙂"],
  ["sick", "🤢"],
  ["dead", "💀"],
]);

function happyClick(){
  console.log("Happy")
}
function sickClick(){
  console.log("sick")
}
function deadClick(){
  console.log("dead")
}

export default function Emoji() {
  let status: EMOJI_KEYS = "sick";
  return (
    <>
      <div className="emoji">{EMOJI_MAP.get(status) || "👻"}</div>
      <div className="acoes">
        <button onClick={happyClick}>Happy</button>
        <button onClick={sickClick}>Sick</button>
        <button onClick={deadClick}>Dead</button>
      </div>
    </>
  );
}
