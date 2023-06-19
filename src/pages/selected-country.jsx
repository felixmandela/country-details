import { useEffect, useState } from "react";
import { getCountryProfile } from "../components/api";

export default function CountryProfile({ selectedCountry }) {
  const [countryProfile, setCountryProfile] = useState("");

  useEffect(() => {
    const fetchCountryProfile = async () => {
      try {
        const data = await getCountryProfile(selectedCountry);
        setCountryProfile(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCountryProfile();
  }, [selectedCountry]);

  return (
    <div>
      <div>
        <img src="" alt="" />
        <h2>{countryProfile?.name?.common}</h2>
        <p>Population: {countryProfile?.population}</p>
        <p>Region: {countryProfile?.region}</p>
        <p>Capital: {countryProfile?.capital}</p>
      </div>
    </div>
  );
}
