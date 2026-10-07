export default function Header({ profile }) {
  const words = profile.name.split(" ");
  const initials = (words[0][0] + words[words.length - 1][0]).toUpperCase();

  return (
    <header className="header">
      <p className="institute">Học viện Công nghệ Bưu chính Viễn thông (PTIT)</p>
      <div className="avatar">{initials}</div>
      <h1>{profile.name}</h1>
      <span className="badge">Đang học</span>
      <p className="header-title">{profile.title}</p>
      <ul className="contact">
        {profile.contacts.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </header>
  );
}
