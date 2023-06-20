import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="light-mode-elements border-grey-100 fixed top-0 h-20 w-full border shadow">
      <nav className="ml-44 mr-44 flex h-full flex-row items-center justify-between">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold">Where in the world?</h1>
          </Link>
        </div>
        <button>Dark Mode</button>
      </nav>
    </header>
  );
}
