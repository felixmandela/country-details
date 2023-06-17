import CountryCard from "../components/card";
import Filter from "../components/filter";
import NavBar from "../components/navbar";
import Searchbar from "../components/search-bar";
import { getAllCountryData } from "../components/api";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState([]);

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

  useEffect(() => {
    const regex = new RegExp(search, "i");
    const filter = country.filter((c) => regex.test(c.name.common));
    setSearchedCountry(filter);
  }, [search, country]);

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Filter />
        <Searchbar search={search} setSearch={setSearch} />
        <CountryCard searchedCountry={searchedCountry} />
      </main>
    </>
  );
}
