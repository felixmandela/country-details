import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="light-mode-elements border-grey-100 fixed top-0 z-10 h-20 w-full border border-l-0 border-r-0 shadow">
      <nav className="ml-8 mr-8 flex h-full flex-row items-center justify-between md:ml-20 md:mr-20 lg:ml-44 lg:mr-44">
        <div>
          <Link to="/">
            <h1 className=" text-lg font-bold md:text-2xl">
              Where in the world?
            </h1>
          </Link>
        </div>
        <button>Dark Mode</button>
      </nav>
    </header>
  );
}
