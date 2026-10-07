import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import SkillList from "./components/SkillList.jsx";
import ProjectList from "./components/ProjectList.jsx";
import { basicInfo, studyInfo, skills, projects } from "./data.js";
import "./App.css";

export default function App() {
  return (
    <div className="cv">
      <Header />

      <Section title="Thông tin chung">
        {basicInfo.map((item) => (
          <div className="info-row" key={item.label}>
            <span className="info-label">{item.label}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </Section>

      <Section title="Thông tin học vụ">
        {studyInfo.map((item) => (
          <div className="info-row" key={item.label}>
            <span className="info-label">{item.label}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </Section>

      <Section title="Kỹ năng">
        <SkillList skills={skills} />
      </Section>

      <Section title="Dự án">
        <ProjectList projects={projects} />
      </Section>
    </div>
  );
}
