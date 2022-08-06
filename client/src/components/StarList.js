import "../pics/star2.png";

export default function StarList({ children, className = "" }) {
  return <div className={`StarList list ${className}`}>{children}</div>;
}
