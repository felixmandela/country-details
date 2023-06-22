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
    <>
      <Router>
        <NavBar />
        {isLoading ? null : (
          <Routes>
            <Route path="/" element={<Home country={country} />} />
            <Route
              path="/:countryCode"
              element={<CountryProfile country={country} />}
            />
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
