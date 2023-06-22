import { Link } from "react-router-dom";

export default function CountryCard({ searchedCountry }) {
  const CountryList = () =>
    searchedCountry.map((c) => (
      <Link to={`/${c.cca3}`} key={c.cca3}>
        <div className="light-mode-elements flex h-96 w-80 flex-col rounded-xl border border-gray-100 shadow">
          <img
            className="h-1/2 overflow-hidden rounded-t-xl"
            src={c?.flags?.png}
            alt={c?.flags?.alt}
          />
          <div className="flex h-1/2 flex-col p-6">
            <h2 className="mb-4  text-xl font-bold">{c?.name?.common}</h2>
            <p className="mb-1 text-sm">
              <span className="font-semibold">Population:</span> {c?.population}
            </p>
            <p className="mb-1 text-sm">
              <span className="font-semibold">Region:</span> {c?.region}
            </p>
            <p className="mb-1 text-sm">
              <span className="font-semibold">Capital:</span> {c?.capital}
            </p>
          </div>
        </div>
      </Link>
    ));
  return (
    <div className="flex flex-row flex-wrap justify-between gap-x-6 gap-y-16">
      <CountryList />
    </div>
  );
}
