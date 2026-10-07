export default function SkillList({ skills }) {
  return (
    <div>
      {skills.map((s) => (
        <div className="skill" key={s.name}>
          <div className="skill-info">
            <span>{s.name}</span>
            <span>{s.level}%</span>
          </div>
          <div className="bar">
            <div className="fill" style={{ width: s.level + "%" }} />
          </div>
        </div>
      ))}
    </div>
  );
}
