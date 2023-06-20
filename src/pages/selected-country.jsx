import { useEffect, useState } from "react";
import { getCountryProfile } from "../components/api";
import { Link, useParams } from "react-router-dom";

export default function CountryProfile() {
  const [countryProfile, setCountryProfile] = useState("");
  const { countryCode } = new useParams();

  useEffect(() => {
    const fetchCountryProfile = async () => {
      try {
        const data = await getCountryProfile(countryCode);
        setCountryProfile(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCountryProfile();
  }, [countryCode]);

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
        <img
          className="h-2/3 w-1/2 pr-20"
          src={countryProfile?.flags?.svg}
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
      </div>
    </main>
  );
}
