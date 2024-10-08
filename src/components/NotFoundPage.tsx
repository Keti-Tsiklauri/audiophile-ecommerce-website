import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>
        404 not found <Link to="/">Home</Link>
      </p>
    </div>
  );
}
