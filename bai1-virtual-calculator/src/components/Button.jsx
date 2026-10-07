export default function Button({ label, color, onPress }) {
  return (
    <button style={{ background: color }} onClick={() => onPress(label)}>
      {label}
    </button>
  );
}
