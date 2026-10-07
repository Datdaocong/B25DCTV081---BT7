export const profile = {
  name: "Đào Công Đạt",
  title: "Sinh viên Công nghệ Thông tin – Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
  summary:
    "Sinh viên năm nhất ngành Công nghệ Thông tin, đang học lập trình web " +
    "(HTML, CSS, JavaScript, React). Yêu thích xây dựng giao diện gọn gàng, " +
    "dễ dùng và luôn muốn thực hành qua dự án nhỏ.",
  contacts: ["datdc.b25tv081@stu.ptit.edu.vn", "Hà Nội, Việt Nam"],
};

export const skills = [
  { name: "HTML / CSS", level: 80 },
  { name: "JavaScript", level: 65 },
  { name: "React", level: 50 },
  { name: "C / C++", level: 60 },
  { name: "Git & GitHub", level: 55 },
  { name: "MySQL", level: 50 },
];

export const projects = [
  {
    id: 1,
    name: "Website bán hàng – JavaScript thuần",
    year: 2026,
    description:
      "Trang cửa hàng dạng SPA \"làm tay\": render danh sách sản phẩm, giỏ hàng, " +
      "gọi API bằng fetch / async-await (Thực hành 1).",
    tech: ["HTML", "CSS", "JavaScript", "Fetch API"],
  },
  {
    id: 2,
    name: "Virtual Calculator",
    year: 2026,
    description:
      "Máy tính ảo viết bằng React: component Display, Button nhận props, " +
      "state lưu biểu thức, tính + − × ÷ với ưu tiên nhân chia (Bài 1 – Buổi 7).",
    tech: ["React", "Vite", "CSS Grid"],
  },
  {
    id: 3,
    name: "Trang CV cá nhân",
    year: 2026,
    description:
      "Trang CV bằng React với 5 component, dữ liệu đặt trong mảng và truyền qua props (Bài 2 – Buổi 7).",
    tech: ["React", "Vite", "props", "children"],
  },
];

export const education = [
  {
    time: "2025 – nay",
    school: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
    detail: "Ngành Công nghệ Thông tin – lớp B25TV081",
  },
];

export const languages = [
  { name: "Tiếng Việt", level: "Bản ngữ" },
  { name: "Tiếng Anh", level: "Đọc hiểu tài liệu chuyên ngành" },
];
