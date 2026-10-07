import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import InfoList from "./components/InfoList.jsx";
import SkillList from "./components/SkillList.jsx";
import ProjectList from "./components/ProjectList.jsx";
import Footer from "./components/Footer.jsx";
import { profile, basicInfo, studyInfo, skills, projects } from "./data/cv.js";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Header profile={profile} />

      <main className="page-main">
        <Section title="Thông tin chung">
          <InfoList items={basicInfo} />
        </Section>

        <Section title="Thông tin học vụ">
          <InfoList items={studyInfo} />
        </Section>

        <Section title="Kỹ năng">
          <SkillList skills={skills} />
        </Section>

        <Section title="Dự án">
          <ProjectList projects={projects} />
        </Section>
      </main>

      <Footer name={profile.name} />
    </div>
  );
}
