# Bài 2 – Trang CV bằng React (Vite)

Bài tập về nhà Buổi 7 – Lập trình Web: chuyển trang CV (Buổi 2–3, làm bằng
HTML/CSS) sang React.

## Cách chạy

```bash
npm install
npm run dev
```

Mở http://localhost:5173 để xem CV.

## Bảng yêu cầu – đã làm gì

| Yêu cầu | Thực hiện |
| --- | --- |
| Ít nhất 4 component | 6 component: `Header`, `Section`, `SkillList`, `ProjectList`, `Footer` và `App` (component gốc) |
| Dữ liệu kỹ năng, dự án đặt trong mảng và truyền qua props | `src/data/cv.js` chứa mảng `skills`, `projects`… → `App` đọc và truyền `<SkillList skills={skills} />`, `<ProjectList projects={projects} />` |
| Component `Section` dùng `children` | `src/components/Section.jsx` – tiêu đề nhận qua props, nội dung viết giữa `<Section title="…">…</Section>` tự động thành `props.children` |

## Cấu trúc

```
src/
├── main.jsx              # gắn App vào #root
├── App.jsx               # component gốc: ghép các khối CV
├── App.css               # giao diện CV
├── data/
│   └── cv.js             # toàn bộ dữ liệu CV (mảng) – muốn sửa CV chỉ sửa file này
└── components/
    ├── Header.jsx        # avatar, họ tên, nghề nghiệp, liên hệ
    ├── Section.jsx       # khung mục dùng chung – dùng props.children
    ├── SkillList.jsx     # nhận mảng skills qua props → thanh mức độ
    ├── ProjectList.jsx   # nhận mảng projects qua props → thẻ dự án
    └── Footer.jsx        # chân trang
```

## Ghi chú

- Thông tin trong `src/data/cv.js` (sở trường, mức kỹ năng, mô tả dự án…) là
  nội dung mẫu – chỉnh lại theo CV thật của bạn trước khi nộp.
- Không dùng thư viện UI ngoài, chỉ React + CSS thuần.
