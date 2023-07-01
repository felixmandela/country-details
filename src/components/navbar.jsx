import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let theme = localStorage.getItem("theme") || "light";

export default function NavBar() {
    const [mode, setMode] = useState(theme);
    useEffect(() => {
        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", mode);
    }, [mode]);

    return (
        <header className="light-mode-elements fixed top-0 z-10 grid h-20 w-full grid-cols-[1fr,420px,1fr] border-b-[1px] border-gray-100 shadow dark:border-gray-800 dark:bg-gray-800 dark:shadow-gray-700 sm:grid-cols-[1fr,640px,1fr] md:grid-cols-[1fr,768px,1fr] lg:grid-cols-[1fr,1024px,1fr] xl:grid-cols-[1fr,1200px,1fr] 2xl:grid-cols-[1fr,1536px,1fr] ">
            <nav className="col-start-2 ml-8 mr-8 flex h-full flex-row items-center justify-between">
                <div>
                    <Link to="/">
                        <h1 className=" text-lg font-bold md:text-2xl">
                            Where in the world?
                        </h1>
                    </Link>
                </div>
                <div
                    className="flex cursor-pointer flex-row items-center justify-center rounded-full border border-gray-100 px-4 py-4 shadow hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-800 dark:shadow-gray-950 hover:dark:bg-gray-950"
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                >
                    <FontAwesomeIcon icon={mode === "light" ? faMoon : faSun} />
                </div>
            </nav>
        </header>
    );
}
