import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="fixed top-0 h-14 w-full bg-red-800">
      <nav className="ml-44 mr-44 flex h-14 flex-row items-center justify-between">
        <div>
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
        </div>
        <button>Dark Mode</button>
      </nav>
    </header>
  );
}
