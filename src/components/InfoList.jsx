export default function InfoList({ items }) {
  return (
    <dl className="info-list">
      {items.map((item) => (
        <div className="info-row" key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
