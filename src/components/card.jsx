export default function CountryCard({ searchedCountry }) {
  const CountryList = () => {
    if (searchedCountry) {
      return searchedCountry.map((c, i) => {
        return (
          <div key={i}>
            <img src="" alt="" />
            <h2>{c.name.common}</h2>
            <p>Population: {c.population}</p>
            <p>Region: {c.region}</p>
            <p>Capital: {c.capital}</p>
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
