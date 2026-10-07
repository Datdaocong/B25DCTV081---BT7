export function calculate(expr) {
  expr = expr.replace(/[+\-*/]+$/, "");
  if (expr[0] === "-") expr = "0" + expr;

  const numbers = expr.split(/[+\-*/]/).map(Number);
  const operators = expr.match(/[+\-*/]/g) || [];

  for (let i = 0; i < operators.length; ) {
    if (operators[i] === "*" || operators[i] === "/") {
      numbers[i] =
        operators[i] === "*" ? numbers[i] * numbers[i + 1] : numbers[i] / numbers[i + 1];
      numbers.splice(i + 1, 1);
      operators.splice(i, 1);
    } else {
      i++;
    }
  }

  let result = numbers[0];
  operators.forEach((op, i) => {
    result = op === "+" ? result + numbers[i + 1] : result - numbers[i + 1];
  });

  return isFinite(result) ? parseFloat(result.toFixed(10)) : "Lỗi";
}
