import { useState } from "react";
import Display from "./components/Display.jsx";
import Button from "./components/Button.jsx";
import "./App.css";

function calculate(expr) {
  const numbers = expr.split(/[+\-*/]/).map(Number);
  const ops = expr.match(/[+\-*/]/g) || [];
  let result = numbers[0];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "+") result += numbers[i + 1];
    if (ops[i] === "-") result -= numbers[i + 1];
    if (ops[i] === "*") result *= numbers[i + 1];
    if (ops[i] === "/") result /= numbers[i + 1];
  }
  return result;
}

export default function App() {
  const [expression, setExpression] = useState("");

  function handlePress(label) {
    if (label === "C") {
      setExpression("");
    } else if (label === "Del") {
      setExpression(expression.slice(0, -1));
    } else if (label === "=") {
      const result = calculate(expression);
      setExpression(isFinite(result) ? String(result) : "Lỗi");
    } else {
      setExpression(expression + label);
    }
  }

  return (
    <div className="calculator">
      <h1>Virtual Calculator</h1>
      <Display expression={expression} />
      <div className="row">
        <Button label="C" color="red" onPress={handlePress} />
        <Button label="Del" color="gray" onPress={handlePress} />
        <Button label="/" color="darkgreen" onPress={handlePress} />
      </div>
      <div className="row">
        <Button label="7" color="green" onPress={handlePress} />
        <Button label="8" color="green" onPress={handlePress} />
        <Button label="9" color="green" onPress={handlePress} />
        <Button label="*" color="darkgreen" onPress={handlePress} />
      </div>
      <div className="row">
        <Button label="4" color="green" onPress={handlePress} />
        <Button label="5" color="green" onPress={handlePress} />
        <Button label="6" color="green" onPress={handlePress} />
        <Button label="-" color="darkgreen" onPress={handlePress} />
      </div>
      <div className="row">
        <Button label="1" color="green" onPress={handlePress} />
        <Button label="2" color="green" onPress={handlePress} />
        <Button label="3" color="green" onPress={handlePress} />
        <Button label="+" color="darkgreen" onPress={handlePress} />
      </div>
      <div className="row">
        <Button label="0" color="green" onPress={handlePress} />
        <Button label="=" color="darkgreen" onPress={handlePress} />
      </div>
    </div>
  );
}
