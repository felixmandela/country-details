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
