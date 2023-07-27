export default function Header(params) {
  const headertext = params.headertext;

  return (
    <div className="header">
      <h2> {headertext}</h2>
    </div>
  );
}
