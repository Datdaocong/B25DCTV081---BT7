import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

// Dữ liệu tạm thời đặt trong App – commit sau sẽ tách ra file riêng
const profile = {
  name: "Đào Công Đạt",
  title: "Sinh viên Công nghệ Thông tin – Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
  contacts: ["datdc.b25tv081@stu.ptit.edu.vn", "Hà Nội, Việt Nam"],
};

const education = [
  {
    time: "2025 – nay",
    school: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
    detail: "Ngành Công nghệ Thông tin – lớp B25TV081",
  },
];

export default function App() {
  return (
    <div className="page">
      <Header profile={profile} />

      <main className="page-main">
        {/* Section là khung chung – nội dung bên trong truyền qua children */}
        <Section title="Học vấn">
          {education.map((item) => (
            <div className="edu-row" key={item.school}>
              <span className="edu-time">{item.time}</span>
              <div>
                <strong>{item.school}</strong>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </Section>
      </main>

      <Footer name={profile.name} />
    </div>
  );
}
