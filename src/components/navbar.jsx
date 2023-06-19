import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
      </div>
      <button>Dark Mode</button>
    </nav>
  );
}
