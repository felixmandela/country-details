import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
          <Route path="/country" element={<CountryProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
