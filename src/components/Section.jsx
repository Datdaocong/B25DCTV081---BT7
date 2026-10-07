// Section – khung mục dùng chung của CV.
// Tiêu đề nhận qua props, nội dung bên trong nhận qua props.children
// (mọi thứ viết giữa <Section> và </Section>)
export default function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}
