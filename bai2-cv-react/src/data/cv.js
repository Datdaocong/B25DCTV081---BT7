export const profile = {
  name: "Đào Công Đạt",
  title: "Sinh viên ngành Trí tuệ nhân tạo vạn vật (AIoT)",
  contacts: ["datdc.b25tv081@stu.ptit.edu.vn", "0398 658 782"],
};

export const basicInfo = [
  { label: "Mã sinh viên", value: "B25DCTV081" },
  { label: "Giới tính", value: "Nam" },
  { label: "Ngày sinh", value: "08/08/2007" },
  { label: "Email", value: "datdc.b25tv081@stu.ptit.edu.vn" },
  { label: "Số điện thoại", value: "0398 658 782" },
];

export const studyInfo = [
  { label: "Đơn vị phụ trách", value: "VKH1" },
  { label: "Chương trình đào tạo", value: "D25CQ – Trí tuệ nhân tạo vạn vật (AIoT)" },
  { label: "Ngành", value: "Trí tuệ nhân tạo vạn vật (AIoT)" },
];

export const skills = [
  { name: "HTML / CSS", level: 80 },
  { name: "JavaScript", level: 65 },
  { name: "React", level: 50 },
  { name: "C / C++", level: 60 },
  { name: "Python", level: 55 },
  { name: "Git & GitHub", level: 55 },
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
      "Trang CV bằng React với 7 component, dữ liệu đặt trong mảng và truyền qua props (Bài 2 – Buổi 7).",
    tech: ["React", "Vite", "props", "children"],
  },
];
