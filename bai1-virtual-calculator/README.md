# Bài 1 – Virtual Calculator (React + Vite)

Bài tập về nhà Buổi 7 – Lập trình Web: Ứng dụng đơn trang (SPA) và React cơ bản.

## Cách chạy

```bash
npm install
npm run dev
```

Mở http://localhost:5173 để dùng thử.

## Yêu cầu – hiện thực

| Yêu cầu | Thực hiện |
| --- | --- |
| Component `Display` hiển thị kết quả | `src/components/Display.jsx` |
| Component `Button` nhận props nhãn, màu | `src/components/Button.jsx` – props `label`, `color` |
| State lưu biểu thức hiện tại | `App.jsx` – `useState("")` |
| Thực hiện + − × ÷, C, = | Bắt phím trong `App.jsx`, tính kết quả bằng `calculate.js` (nhân chia trước, cộng trừ sau) |

## Cấu trúc

```
src/
├── main.jsx              # gắn App vào #root
├── App.jsx               # state biểu thức + danh sách phím + bắt sự kiện bấm
├── calculate.js          # hàm tính biểu thức
└── components/
    ├── Display.jsx       # màn hình hiển thị
    └── Button.jsx        # phím bấm dùng chung
```

Chia 0 hoặc biểu thức chưa hợp lệ sẽ hiển thị "Lỗi", bấm C để tính lại.
