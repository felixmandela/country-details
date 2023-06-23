import CountryCard from "../components/card";
import Filter from "../components/filter";
import Searchbar from "../components/search-bar";
// import { getAllCountryData } from "../components/api";
import React, { useState, useEffect } from "react";

export default function Home({ country }) {
  const [search, setSearch] = useState("");
  // const [country, setCountry] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState([]);
  const [region, setRegion] = useState("");
  const [filteredCountry, setFilteredCountry] = useState([]);

  // useEffect(() => {
  //   const fetchAllCountryData = async () => {
  //     try {
  //       const data = await getAllCountryData();
  //       setCountry(data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchAllCountryData();
  // }, []);

  // useEffect(() => {
  //   const fetchRegionData = async () => {
  //     try {
  //       const data = await getRegionData(region);
  //       setCountry(data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   if (region) {
  //     fetchRegionData();
  //   } else {
  //     const fetchAllCountryData = async () => {
  //       try {
  //         const data = await getAllCountryData();
  //         setCountry(data);
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     };
  //     fetchAllCountryData();
  //   }
  // }, [region]);

  useEffect(() => {
    const regex = new RegExp(region, "i");
    const filter = country.filter((c) => regex.test(c.region));
    setFilteredCountry(filter);
  }, [region, country]);

  useEffect(() => {
    const regex = new RegExp(search, "i");
    const filter = filteredCountry.filter((c) => regex.test(c.name.common));
    setSearchedCountry(filter);
  }, [search, filteredCountry]);

  return (
    <>
      <section className="mt-12 flex h-1/5 flex-col gap-y-6 md:mt-0 md:flex-row md:items-center md:justify-between md:gap-y-0">
        <Searchbar search={search} setSearch={setSearch} />
        <Filter region={region} setRegion={setRegion} />
      </section>
      <CountryCard searchedCountry={searchedCountry} />
    </>
  );
}
