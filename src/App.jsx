import { useState } from "react";
import Display from "./components/Display.jsx";
import Button from "./components/Button.jsx";
import { calculate } from "./calculate.js";
import "./App.css";

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
  const [expression, setExpression] = useState("");

  function handlePress(label) {
    if (expression === "Lỗi" && label !== "C") return;
    if (label === "C") return setExpression("");
    if (label === "Del") return setExpression(expression.slice(0, -1));
    if (label === "=") return setExpression(String(calculate(expression)));
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
