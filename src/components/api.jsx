import axios from "axios";

export const getAllCountryData = async () => {
  try {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3,borders,continents`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getCountryProfile = async (code) => {
  try {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/alpha/${code}?fields=name,population,region,capital,flags,cca3,borders,continents,currencies,subregion,languages,tld`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// export const getRegionData = async (region) => {
//   try {
//     const { data } = await axios.get(
//       `https://restcountries.com/v3.1/region/${region}?fields=name,population,region,capital,flags,cca3,borders,continents`
//     );
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// export const getCountryData = async (keyword) => {
//   try {
//     const { data } = await axios.get(
//       `https://restcountries.com/v3.1/name/${keyword}?fields=name,population,region,capital,flags,cca3,borders,continents`
//     );
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
