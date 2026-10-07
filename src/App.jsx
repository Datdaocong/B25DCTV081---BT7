import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import SkillList from "./components/SkillList.jsx";
import ProjectList from "./components/ProjectList.jsx";
import Footer from "./components/Footer.jsx";
import { profile, skills, projects, education, languages } from "./data/cv.js";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Header profile={profile} />

      <main className="page-main">
        {/* Mỗi Section là một khung mục: title truyền qua props,
            nội dung bên trong cặp thẻ truyền qua children */}
        <Section title="Giới thiệu">
          <p className="summary">{profile.summary}</p>
        </Section>

        <Section title="Kỹ năng">
          <SkillList skills={skills} />
        </Section>

        <Section title="Dự án">
          <ProjectList projects={projects} />
        </Section>

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

        <Section title="Ngoại ngữ">
          <ul className="lang-list">
            {languages.map((lang) => (
              <li key={lang.name}>
                <strong>{lang.name}</strong> — {lang.level}
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <Footer name={profile.name} />
    </div>
  );
}
