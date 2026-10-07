type EMOJI_KEYS = "happy" | "sick" | "dead";
const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
  ["happy", "🙂"],
  ["sick", "🤢"],
  ["dead", "💀"],
]);

export default function Emoji() {
  function happyClick() {
    console.log("Status :", status);
    console.log("Happy");
    status = "happy";
    console.log("Status :", status);
  }
  function sickClick() {
    console.log("Status :", status);
    console.log("sick");
    status = "sick";
    console.log("Status :", status);
  }
  function deadClick() {
    console.log("Status :", status);
    console.log("dead");
    status = "dead";
    console.log("Status :", status);
  }
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
