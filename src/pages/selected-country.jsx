import { useEffect, useState } from "react";
import { getCountryProfile } from "../components/api";
import { Link, useParams } from "react-router-dom";

const Loading = () => (
  <div className="absolute left-1/2 top-1/2 h-12 w-12 animate-spin rounded-full border-t-4 border-gray-300"></div>
);

export default function CountryProfile({ country }) {
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

  const BorderCountry = () =>
    countryProfile?.borders?.length > 0 && (
      <div className="mt-10 flex flex-row items-start">
        <span className="mt-1 min-w-[150px] font-bold">Border Countries:</span>
        <ul className="flex flex-row flex-wrap gap-4">
          {countryProfile?.borders?.map((cca3Code) => (
            <li className="" key={cca3Code}>
              <Link
                className="inline-block border border-gray-100 pb-1 pl-3 pr-3 pt-1 shadow"
                to={`/${cca3Code}`}
              >
                {
                  country.find((country) => country.cca3 === cca3Code).name
                    .common
                }
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );

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
        <Link
          className="flex h-12 w-24 items-center justify-center border border-gray-100 shadow"
          to="/"
        >
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
              className="h-2/3 w-[560px]"
              src={countryProfile?.flags?.svg}
              alt={countryProfile?.flags?.alt}
            />
            <section className="w-[calc(100%-560px)] p-10 pl-20">
              <h2 className=" mb-8 text-4xl font-bold">
                {countryProfile?.name?.common}
              </h2>
              <div className="flex flex-row gap-8">
                <div className="w-1/2">
                  <p className="mb-3 ">
                    <span className="font-bold">Native Name:</span>{" "}
                    {Object.keys(countryProfile?.name?.nativeName)
                      .map((c) => countryProfile?.name?.nativeName[c].official)
                      .join(", ")}
                  </p>
                  <p className="mb-3 ">
                    <span className="font-bold">Population:</span>{" "}
                    {countryProfile?.population}
                  </p>
                  <p className="mb-3 ">
                    <span className="font-bold">Region:</span>{" "}
                    {countryProfile?.region}
                  </p>
                  <p className="mb-3 ">
                    <span className="font-bold">Sub Region:</span>{" "}
                    {countryProfile?.subregion}
                  </p>
                  <p className="mb-3 ">
                    <span className="font-bold">Capital:</span>{" "}
                    {countryProfile?.capital}
                  </p>
                </div>
                <div className="w-1/2">
                  <p className="mb-3 ">
                    <span className="font-bold">Top Level Domain:</span>{" "}
                    {countryProfile?.tld[0]}
                  </p>
                  <p className="mb-3 ">
                    <span className="font-bold">Currencies:</span>{" "}
                    {
                      /* {
                      countryProfile?.currencies?.[
                        Object.keys(countryProfile.currencies)[0]
                      ]?.name
                    } */
                      Object.keys(countryProfile?.currencies).map(
                        (c) => countryProfile?.currencies[c]?.name
                      )
                    }
                  </p>
                  <p className="mb-3 ">
                    <span className="font-bold">Languages:</span>{" "}
                    {Object.keys(countryProfile?.languages)
                      .map((c) => countryProfile?.languages[c])
                      .join(", ")}
                  </p>
                </div>
              </div>
              <BorderCountry />
            </section>
          </>
        )}
      </div>
    </main>
  );
}
