export default function Footer(params) {
  const footertext = params.footertext;

  return (
    <div className="footer">
      <p> {footertext}</p>
    </div>
  );
}
