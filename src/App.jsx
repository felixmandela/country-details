import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAllCountryData } from "./components/api";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import CountryProfile from "./pages/selected-country";
import { useEffect, useState } from "react";

// const Home = lazy(() => import("./pages/home"));
// const CountryProfile = lazy(() => import("./pages/selected-country"));

function App() {
    const [country, setCountry] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAllCountryData = async () => {
            try {
                const data = await getAllCountryData();
                setCountry(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchAllCountryData();
    }, []);

    return (
        <div className="min-h-screen dark:bg-gray-900 dark:text-white">
            <Router>
                <NavBar />
                {isLoading ? null : (
                    <main
                        className={`relative ml-8 mr-8 min-h-screen pt-28 md:ml-20 md:mr-20 lg:ml-44 lg:mr-44`}
                    >
                        <Routes>
                            <Route
                                path="/"
                                element={<Home country={country} />}
                            />
                            <Route
                                path="/:countryCode"
                                element={<CountryProfile country={country} />}
                            />
                        </Routes>
                    </main>
                )}
            </Router>
        </div>
    );
}

export default App;
