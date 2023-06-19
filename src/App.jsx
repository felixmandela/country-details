import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar";
import Home from "./pages/home";
import CountryProfile from "./pages/selected-country";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:countryCode" element={<CountryProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
