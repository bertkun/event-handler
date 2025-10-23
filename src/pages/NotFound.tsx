import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section style={{ padding: "4rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ fontSize: "1.25rem" }}>Page not found.</p>
      <p style={{ marginTop: "1rem" }}>
        <Link to="/" style={{ color: "#007bff", textDecoration: "underline" }}>
          Return to Home
        </Link>
      </p>
    </section>
  );
}
