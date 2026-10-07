import { useState } from "react";
import Display from "./components/Display.jsx";
import Button from "./components/Button.jsx";
import { calculate } from "./calculate.js";
import "./App.css";

// Màu của từng nhóm phím – truyền vào Button qua props
const COLORS = {
  number: "#2fb344", // chữ số
  operator: "#1d7a3e", // + − × ÷
  func: "#6b7280", // Del
  clear: "#e03131", // C
  equals: "#14532d", // =
};

// Bố cục bàn phím: nhãn hiển thị, màu và số cột chiếm chỗ của từng phím
const KEYS = [
  { label: "C", color: COLORS.clear, span: 2 },
  { label: "Del", color: COLORS.func },
  { label: "÷", color: COLORS.operator },
  { label: "7", color: COLORS.number },
  { label: "8", color: COLORS.number },
  { label: "9", color: COLORS.number },
  { label: "×", color: COLORS.operator },
  { label: "4", color: COLORS.number },
  { label: "5", color: COLORS.number },
  { label: "6", color: COLORS.number },
  { label: "−", color: COLORS.operator },
  { label: "1", color: COLORS.number },
  { label: "2", color: COLORS.number },
  { label: "3", color: COLORS.number },
  { label: "+", color: COLORS.operator },
  { label: "0", color: COLORS.number, span: 2 },
  { label: "=", color: COLORS.equals, span: 2 },
];

const OPERATORS = "+−×÷";

export default function App() {
  // State lưu biểu thức hiện tại, ví dụ "7+8×2"
  const [expression, setExpression] = useState("");

  function handlePress(label) {
    setExpression((prev) => {
      // Sau khi báo lỗi, phím tiếp theo bắt đầu lại biểu thức mới
      const expr = prev === "Lỗi" ? "" : prev;

      if (label === "C") return "";
      if (label === "Del") return expr.slice(0, -1);
      if (label === "=") {
        if (expr === "") return "";
        // Bỏ toán tử thừa ở cuối (vd "7+" coi như "7") rồi tính kết quả
        const result = calculate(expr.replace(new RegExp(`[${OPERATORS}]+$`), ""));
        return result === null ? "Lỗi" : String(result);
      }
      if (OPERATORS.includes(label)) {
        if (expr === "") return expr; // toán tử không được đứng đầu
        if (OPERATORS.includes(expr.at(-1))) {
          return expr.slice(0, -1) + label; // gõ 2 toán tử liền nhau → thay toán tử cũ
        }
      }
      return expr + label;
    });
  }

  return (
    <div className="calculator">
      <h1 className="calculator-title">Virtual Calculator</h1>
      <Display expression={expression} />
      <div className="keypad">
        {KEYS.map((key) => (
          <Button
            key={key.label}
            label={key.label}
            color={key.color}
            span={key.span}
            onPress={handlePress}
          />
        ))}
      </div>
    </div>
  );
}
