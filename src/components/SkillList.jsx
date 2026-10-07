// SkillList – nhận mảng kỹ năng qua props và vẽ thanh mức độ cho từng kỹ năng
export default function SkillList({ skills }) {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <li className="skill" key={skill.name}>
          <div className="skill-head">
            <span>{skill.name}</span>
            <span className="skill-percent">{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}
