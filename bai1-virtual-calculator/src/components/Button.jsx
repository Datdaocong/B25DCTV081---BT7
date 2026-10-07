// Button – phím bấm dùng chung: nhận props nhãn (label), màu (color)
// và hàm onPress từ component cha
export default function Button({ label, color, span = 1, onPress }) {
  return (
    <button
      className="btn"
      style={{ background: color, gridColumn: `span ${span}` }}
      onClick={() => onPress(label)}
    >
      {label}
    </button>
  );
}
