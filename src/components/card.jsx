import { Link } from "react-router-dom";

export default function CountryCard({ searchedCountry, setSelectedCountry }) {
  const CountryList = () => {
    if (searchedCountry) {
      return searchedCountry.map((c, i) => {
        return (
          <div key={i} onClick={() => setSelectedCountry(c.cca3)}>
            <Link to={`/${c.cca3}`}>
              <img src="" alt="" />
              <h2>{c.name.common}</h2>
              <p>Population: {c.population}</p>
              <p>Region: {c.region}</p>
              <p>Capital: {c.capital}</p>
            </Link>
          </div>
        );
      });
    }
  };
  return (
    <div>
      <CountryList />
    </div>
  );
}
