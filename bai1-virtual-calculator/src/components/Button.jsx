// Button – phím bấm tái sử dụng: nhận props nhãn (label), màu (color),
// span (số cột chiếm chỗ) và hàm onPress do component cha truyền xuống
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
