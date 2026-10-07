export default function Display({ expression }) {
  return <div className="display">{expression || "0"}</div>;
}
