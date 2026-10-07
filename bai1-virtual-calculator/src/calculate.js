// calculate.js – tính giá trị một biểu thức dạng "7+8×2"
// Ưu tiên nhân/chia trước, cộng/trừ sau (không dùng eval vì không an toàn)

// Tách biểu thức thành mảng xen kẽ số và toán tử, ví dụ "7+8×2" → ["7","+","8","×","2"]
function tokenize(expr) {
  const clean = expr.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-");
  return clean.match(/\d+|[+\-*/]/g) ?? [];
}

// Trả về kết quả dạng số, hoặc null nếu biểu thức không hợp lệ / chia cho 0
export function calculate(expr) {
  const tokens = tokenize(expr);
  if (tokens.length === 0) return null;

  // Biểu thức sau dấu "=" có thể âm (ví dụ "-5"), nối dấu trừ vào số đầu tiên
  if (tokens[0] === "-") {
    tokens.shift();
    tokens[0] = -Number(tokens[0]);
  }

  // Bước 1: duyệt qua và gom luôn các phép nhân, chia
  const reduced = [Number(tokens[0])];
  for (let i = 1; i < tokens.length; i += 2) {
    const op = tokens[i];
    const num = Number(tokens[i + 1]);
    if (op === "*") {
      reduced[reduced.length - 1] *= num;
    } else if (op === "/") {
      if (num === 0) return null;
      reduced[reduced.length - 1] /= num;
    } else {
      reduced.push(op, num);
    }
  }

  // Bước 2: cộng, trừ từ trái sang phải
  let result = reduced[0];
  for (let i = 1; i < reduced.length; i += 2) {
    result = reduced[i] === "+" ? result + reduced[i + 1] : result - reduced[i + 1];
  }

  if (!isFinite(result)) return null;
  // Làm tròn để tránh lỗi dấu phẩy động: 0.1 + 0.2 = 0.30000000000000004
  return parseFloat(result.toFixed(10));
}
