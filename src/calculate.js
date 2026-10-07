// Tính giá trị biểu thức, ví dụ "7+8*2" → 23 (nhân chia trước, cộng trừ sau)
export function calculate(expr) {
  expr = expr.replace(/[+\-*/]+$/, ""); // bỏ toán tử thừa ở cuối, vd "7+" → "7"
  if (expr[0] === "-") expr = "0" + expr; // hỗ trợ kết quả âm, vd "-5+3"

  const numbers = expr.split(/[+\-*/]/).map(Number);
  const operators = expr.match(/[+\-*/]/g) || [];

  // Bước 1: thực hiện nhân, chia trước
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

  // Bước 2: cộng, trừ từ trái sang phải
  let result = numbers[0];
  operators.forEach((op, i) => {
    result = op === "+" ? result + numbers[i + 1] : result - numbers[i + 1];
  });

  return isFinite(result) ? parseFloat(result.toFixed(10)) : "Lỗi";
}
