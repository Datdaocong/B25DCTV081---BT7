import { useState } from "react";
import Display from "./components/Display.jsx";
import Button from "./components/Button.jsx";
import { calculate } from "./calculate.js";
import "./App.css";

// Danh sách phím theo thứ tự trên bàn phím: nhãn, màu, số cột chiếm chỗ
const KEYS = [
  { label: "C", color: "#e03131", span: 2 },
  { label: "Del", color: "#6b7280" },
  { label: "/", color: "#1d7a3e" },
  { label: "7", color: "#2fb344" },
  { label: "8", color: "#2fb344" },
  { label: "9", color: "#2fb344" },
  { label: "*", color: "#1d7a3e" },
  { label: "4", color: "#2fb344" },
  { label: "5", color: "#2fb344" },
  { label: "6", color: "#2fb344" },
  { label: "-", color: "#1d7a3e" },
  { label: "1", color: "#2fb344" },
  { label: "2", color: "#2fb344" },
  { label: "3", color: "#2fb344" },
  { label: "+", color: "#1d7a3e" },
  { label: "0", color: "#2fb344", span: 2 },
  { label: "=", color: "#14532d", span: 2 },
];

export default function App() {
  // State lưu biểu thức hiện tại, ví dụ "7+8*2"
  const [expression, setExpression] = useState("");

  function handlePress(label) {
    if (expression === "Lỗi" && label !== "C") return; // đang lỗi → chỉ C có tác dụng
    if (label === "C") return setExpression("");
    if (label === "Del") return setExpression(expression.slice(0, -1));
    if (label === "=") return setExpression(String(calculate(expression)));
    // Không cho toán tử đứng đầu hay 2 toán tử liền nhau
    if ("+-*/".includes(label) && ("+-*/".includes(expression.at(-1)) || expression === ""))
      return;
    setExpression(expression + label);
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
