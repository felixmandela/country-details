import { useEffect, useState } from "react";
import { getCountryProfile } from "../components/api";
import { Link, useParams } from "react-router-dom";

const Loading = () => (
    <div className="fixed left-[calc(50%-1.5rem)] top-[calc(50%-1.5rem)] h-12 w-12 animate-spin rounded-full border-t-4 border-gray-300"></div>
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
            <div className="mt-10 flex flex-col items-start sm:flex-row">
                <span className="mt-1 min-w-[150px] font-bold">
                    Border Countries:
                </span>
                <ul className="flex flex-row flex-wrap gap-4">
                    {countryProfile?.borders?.map((cca3Code) => (
                        <li className="" key={cca3Code}>
                            <Link
                                className="inline-block border border-gray-100 pb-1 pl-3 pr-3 pt-1 shadow hover:bg-gray-100 dark:border-gray-900 dark:bg-gray-800 dark:shadow-gray-950 hover:dark:bg-gray-950"
                                to={`/${cca3Code}`}
                            >
                                {
                                    country.find(
                                        (country) => country.cca3 === cca3Code
                                    ).name.common
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
        <>
            <div className="mb-10 flex items-center">
                <Link
                    className="light-mode-elements flex h-12 w-24 items-center justify-center border border-gray-100 shadow hover:bg-gray-100 dark:border-gray-900 dark:bg-gray-800 dark:shadow-gray-950 hover:dark:bg-gray-950"
                    to="/"
                >
                    Back
                </Link>
            </div>
            <div className="flex w-full flex-col xl:flex-row ">
                {isLoading ? (
                    <Loading />
                ) : error ? (
                    <div>Error: {error}</div>
                ) : (
                    <>
                        <img
                            className="mb-10 h-2/3 w-full xl:w-[560px] xl:pt-10"
                            src={countryProfile?.flags?.svg}
                            alt={countryProfile?.flags?.alt}
                        />
                        <section className="w-full pb-10 xl:w-[calc(100%-560px)] xl:p-10 xl:pl-20">
                            <h2 className=" mb-8 text-4xl font-bold">
                                {countryProfile?.name?.common}
                            </h2>
                            <div className="flex flex-col gap-8 sm:flex-row">
                                <div className="w-full sm:w-1/2">
                                    <p className="mb-3 ">
                                        <span className="font-bold">
                                            Native Name:
                                        </span>{" "}
                                        {Object.keys(
                                            countryProfile?.name?.nativeName
                                        )
                                            .map(
                                                (c) =>
                                                    countryProfile?.name
                                                        ?.nativeName[c].official
                                            )
                                            .join(", ")}
                                    </p>
                                    <p className="mb-3 ">
                                        <span className="font-bold">
                                            Population:
                                        </span>{" "}
                                        {countryProfile?.population}
                                    </p>
                                    <p className="mb-3 ">
                                        <span className="font-bold">
                                            Region:
                                        </span>{" "}
                                        {countryProfile?.region}
                                    </p>
                                    <p className="mb-3 ">
                                        <span className="font-bold">
                                            Sub Region:
                                        </span>{" "}
                                        {countryProfile?.subregion}
                                    </p>
                                    <p className="mb-3 ">
                                        <span className="font-bold">
                                            Capital:
                                        </span>{" "}
                                        {countryProfile?.capital}
                                    </p>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <p className="mb-3 ">
                                        <span className="font-bold">
                                            Top Level Domain:
                                        </span>{" "}
                                        {countryProfile?.tld[0]}
                                    </p>
                                    <p className="mb-3 ">
                                        <span className="font-bold">
                                            Currencies:
                                        </span>{" "}
                                        {
                                            /* {
                      countryProfile?.currencies?.[
                        Object.keys(countryProfile.currencies)[0]
                      ]?.name
                    } */
                                            Object.keys(
                                                countryProfile?.currencies
                                            ).map(
                                                (c) =>
                                                    countryProfile?.currencies[
                                                        c
                                                    ]?.name
                                            )
                                        }
                                    </p>
                                    <p className="mb-3 ">
                                        <span className="font-bold">
                                            Languages:
                                        </span>{" "}
                                        {Object.keys(countryProfile?.languages)
                                            .map(
                                                (c) =>
                                                    countryProfile?.languages[c]
                                            )
                                            .join(", ")}
                                    </p>
                                </div>
                            </div>
                            <BorderCountry />
                        </section>
                    </>
                )}
            </div>
        </>
    );
}
