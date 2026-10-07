# Bài 2 – Trang CV bằng React (Vite)

Bài tập về nhà Buổi 7 – Lập trình Web: chuyển trang CV (Buổi 2–3, thông tin
sinh viên PTIT) sang React.

## Cách chạy

```bash
npm install
npm run dev
```

Mở http://localhost:5173 để xem CV.

## Bảng yêu cầu – đã làm gì

| Yêu cầu | Thực hiện |
| --- | --- |
| Ít nhất 4 component | 7 component: `App`, `Header`, `Section`, `InfoList`, `SkillList`, `ProjectList`, `Footer` |
| Dữ liệu kỹ năng, dự án đặt trong mảng và truyền qua props | `src/data/cv.js` chứa mảng `skills`, `projects`… → `App` truyền `<SkillList skills={skills} />`, `<ProjectList projects={projects} />` |
| Component `Section` dùng `children` | `src/components/Section.jsx` – nội dung viết giữa `<Section title="…">…</Section>` tự động thành `props.children` |

## Cấu trúc

```
src/
├── main.jsx              # gắn App vào #root
├── App.jsx               # component gốc: ghép các khối CV
├── App.css               # giao diện CV
├── data/
│   └── cv.js             # toàn bộ dữ liệu CV (mảng) – muốn sửa CV chỉ sửa file này
└── components/
    ├── Header.jsx        # tên viện, avatar, họ tên, badge "Đang học", liên hệ
    ├── Section.jsx       # khung mục dùng chung – dùng props.children
    ├── InfoList.jsx      # nhận mảng {label, value} qua props → hàng thông tin
    ├── SkillList.jsx     # nhận mảng skills qua props → thanh mức độ
    ├── ProjectList.jsx   # nhận mảng projects qua props → thẻ dự án
    └── Footer.jsx        # chân trang
```

Thông tin cá nhân (mã sinh viên, ngành AIoT, chương trình D25CQ, đơn vị VKH1,
ngày sinh, số điện thoại) lấy theo trang CV của Học viện; mức kỹ năng và mô tả
dự án chỉnh trong `src/data/cv.js`.
