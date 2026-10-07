// Header – đầu trang CV: avatar chữ cái, họ tên, nghề nghiệp và liên hệ
export default function Header({ profile }) {
  const words = profile.name.split(" ");
  const initials = (words[0][0] + words[words.length - 1][0]).toUpperCase();

  return (
    <header className="header">
      <div className="avatar">{initials}</div>
      <h1>{profile.name}</h1>
      <p className="header-title">{profile.title}</p>
      <ul className="contact">
        {profile.contacts.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </header>
  );
}
