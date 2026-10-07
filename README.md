# BT7 – Lập trình Web Buổi 7: SPA & React

Sinh viên: **Đào Công Đạt** – MSV **B25DCTV081** – datdc.b25tv081@stu.ptit.edu.vn
Học viện Công nghệ Bưu chính Viễn thông (PTIT)

Bài tập về nhà Buổi 7: Ứng dụng đơn trang (SPA) và React cơ bản.
Cả hai bài đều là dự án **Vite + React**, chạy được bằng `npm run dev`.

## Nội dung

| Thư mục | Bài tập | Yêu cầu chính |
| --- | --- | --- |
| [`bai1-virtual-calculator/`](./bai1-virtual-calculator) | Bài 1 – Virtual Calculator | Component `Display` hiển thị kết quả · component `Button` nhận props nhãn, màu · state lưu biểu thức · thực hiện + − × ÷, C, = |
| [`bai2-cv-react/`](./bai2-cv-react) | Bài 2 – Trang CV bằng React | Ít nhất 4 component · dữ liệu kỹ năng, dự án trong mảng truyền qua props · component `Section` dùng `children` |

## Cách chạy

Cần cài Node.js LTS trước. Mỗi bài chạy riêng trong thư mục của nó:

```bash
# Bài 1 – Virtual Calculator
cd bai1-virtual-calculator
npm install
npm run dev        # mở http://localhost:5173

# Bài 2 – Trang CV
cd bai2-cv-react
npm install
npm run dev        # mở http://localhost:5173
```

Chi tiết cấu trúc và cách hiện thực từng yêu cầu xem trong `README.md`
của từng thư mục.
