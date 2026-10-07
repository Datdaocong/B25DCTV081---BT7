# Bài 1 – Virtual Calculator (React + Vite)

Bài tập về nhà Buổi 7 – Lập trình Web: Ứng dụng đơn trang (SPA) và React cơ bản.

## Cách chạy

```bash
npm install
npm run dev
```

Mở http://localhost:5173 để dùng thử.

## Bảng yêu cầu – đã làm gì

| Yêu cầu | Thực hiện |
| --- | --- |
| Component `Display` hiển thị kết quả | `src/components/Display.jsx` – nhận biểu thức / kết quả qua props, hiển thị lên màn hình |
| Component `Button` nhận props nhãn, màu | `src/components/Button.jsx` – nhận `label`, `color`, `span`, `onPress` |
| State lưu biểu thức hiện tại | `App.jsx` – `const [expression, setExpression] = useState("")` |
| Thực hiện + − × ÷, C, = | Phím `+ − × ÷` thêm toán tử, `C` xoá tất cả, `Del` xoá 1 ký tự, `=` tính kết quả (ưu tiên × ÷ trước + −, chia 0 báo "Lỗi") |

## Cấu trúc

```
src/
├── main.jsx              # gắn App vào #root
├── App.jsx               # component gốc: state biểu thức + bố cục bàn phím
├── App.css               # giao diện máy tính
├── calculate.js          # hàm tính biểu thức (nhân chia trước, cộng trừ sau)
└── components/
    ├── Display.jsx       # màn hình hiển thị biểu thức / kết quả
    └── Button.jsx        # phím bấm tái sử dụng (props: nhãn, màu)
```

## Ghi chú

- Biểu thức được lưu dạng chuỗi, ví dụ `"7+8×2"`; bấm `=` mới tính kết quả bằng
  hàm `calculate()` (không dùng `eval`).
- Gõ 2 toán tử liền nhau sẽ thay thế toán tử cũ; sau khi báo "Lỗi", phím kế
  tiếp bắt đầu lại biểu thức mới.
