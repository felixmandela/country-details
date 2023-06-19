import CountryCard from "../components/card";
import Filter from "../components/filter";
import Searchbar from "../components/search-bar";
import { getAllCountryData } from "../components/api";
import React, { useState, useEffect } from "react";

export default function Home({ setSelectedCountry }) {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState([]);
  const [region, setRegion] = useState("");
  const [filteredCountry, setFilteredCountry] = useState([]);

  useEffect(() => {
    const fetchAllCountryData = async () => {
      try {
        const data = await getAllCountryData();
        setCountry(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAllCountryData();
  }, []);

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
      <main>
        <Filter region={region} setRegion={setRegion} />
        <Searchbar search={search} setSearch={setSearch} />
        <CountryCard
          searchedCountry={searchedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </main>
    </>
  );
}
