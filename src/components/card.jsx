import { Link } from "react-router-dom";

export default function CountryCard({ searchedCountry }) {
  const CountryList = () => {
    return searchedCountry.map((c) => {
      return (
        <Link to={`/${c.cca3}`} key={c.cca3}>
          <div className="light-mode-elements flex h-96 w-80 flex-col rounded-xl border border-gray-100 shadow">
            <img
              className="h-1/2 overflow-hidden rounded-t-xl"
              src={c?.flags?.png}
              alt={c?.flags?.alt}
            />
            <div className="flex h-1/2 flex-col justify-center p-4">
              <h2 className="text-xl font-bold">{c?.name?.common}</h2>
              <p>Population: {c?.population}</p>
              <p>Region: {c?.region}</p>
              <p>Capital: {c?.capital}</p>
            </div>
          </div>
        </Link>
      );
    });
  };
  return (
    <div className="flex flex-row flex-wrap justify-between gap-x-6 gap-y-16">
      <CountryList />
    </div>
  );
}
