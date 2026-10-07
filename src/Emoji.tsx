
const EMOJI_MAP = new Map<string, string>([
["happy", "🙂"],
["sick", "🤢"],
["dead", "💀"]
])

export default function Emoji() {
  return <div className="emoji">{EMOJI_MAP.get("sick")}</div>;
}
