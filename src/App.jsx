import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar";
import Home from "./pages/home";
import CountryProfile from "./pages/selected-country";
import { useState } from "react";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  console.log(selectedCountry);
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home setSelectedCountry={setSelectedCountry} />}
          />
          <Route
            path={`/${selectedCountry}`}
            element={<CountryProfile selectedCountry={selectedCountry} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
