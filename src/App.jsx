import { useState } from "react";
import Display from "./components/Display.jsx";
import Button from "./components/Button.jsx";
import "./App.css";

export default function App() {
  // State lưu biểu thức hiện tại, ví dụ "7+8"
  const [expression, setExpression] = useState("");

  function handlePress(label) {
    setExpression(expression + label);
  }

  const digits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

  return (
    <div className="calculator">
      <h1 className="calculator-title">Virtual Calculator</h1>
      <Display expression={expression} />
      <div className="keypad">
        {digits.map((d) => (
          <Button key={d} label={d} color="#2fb344" onPress={handlePress} />
        ))}
      </div>
    </div>
  );
}
