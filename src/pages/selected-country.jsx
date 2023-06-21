import { useEffect, useState } from "react";
import { getCountryProfile } from "../components/api";
import { Link, useParams } from "react-router-dom";

const Loading = () => (
  <div className="absolute left-1/2 top-1/2 h-12 w-12 animate-spin rounded-full border-t-4 border-gray-300"></div>
);

export default function CountryProfile() {
  const [countryProfile, setCountryProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { countryCode } = new useParams();

  useEffect(() => {
    const fetchCountryProfile = async () => {
      try {
        const data = await getCountryProfile(countryCode);
        setCountryProfile(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchCountryProfile();
  }, [countryCode]);

  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  const BorderCountry = () => {
    return countryProfile?.borders?.map((c, i) => {
      return (
        <li key={c}>
          <Link to={`/${c}`}>{c}</Link>
        </li>
      );
    });
  };

  // const BorderCountry = () => {
  //   const borderCountry = countryProfile.borders;
  //   if (countryProfile && borderCountry) {
  //     return borderCountry.map((c, i) => {
  //       return (
  //         <li key={c}>
  //           <Link to={`/${c}`}>{c}</Link>
  //         </li>
  //       );
  //     });
  //   }
  // };

  return (
    <main className="ml-44 mr-44 flex h-full flex-col pt-14">
      <div className="flex h-1/5 items-center">
        <Link className="flex h-12 w-24 items-center justify-center" to="/">
          Back
        </Link>
      </div>
      <div className="flex h-4/5 w-full flex-row">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            <img
              className="h-2/3 w-1/2 pr-20"
              src={countryProfile?.flags?.png}
              alt={countryProfile?.flags?.alt}
            />
            <div className="w-1/2">
              <h2>{countryProfile?.name?.common}</h2>
              <p>Population: {countryProfile?.population}</p>
              <p>Region: {countryProfile?.region}</p>
              <p>Capital: {countryProfile?.capital}</p>
              <ul>
                <BorderCountry />{" "}
              </ul>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
