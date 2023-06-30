import { Link } from "react-router-dom";

export default function CountryCard({ searchedCountry }) {
    const CountryList = () =>
        searchedCountry.map((c) => (
            <Link to={`/${c.cca3}`} key={c.cca3}>
                <div className=" light-mode-elements flex h-96 w-[356px] flex-col rounded-xl border border-gray-100 shadow hover:bg-gray-100  dark:border-gray-900 dark:bg-gray-800 dark:shadow-gray-950 hover:dark:bg-gray-950 sm:h-72 sm:w-64 md:h-80 md:w-72 lg:h-72 lg:w-64 xl:h-72 xl:w-64">
                    <img
                        className="h-1/2 w-full overflow-hidden rounded-t-xl"
                        src={c?.flags?.png}
                        alt={c?.flags?.alt}
                    />
                    <div className="flex h-1/2 flex-col p-6">
                        <h2 className="mb-4 text-xl font-bold sm:text-base ">
                            {c?.name?.common}
                        </h2>
                        <p className="mb-1 sm:text-xs ">
                            <span className="font-semibold">Population:</span>{" "}
                            {c?.population}
                        </p>
                        <p className="mb-1 sm:text-xs ">
                            <span className="font-semibold">Region:</span>{" "}
                            {c?.region}
                        </p>
                        <p className="mb-1 sm:text-xs ">
                            <span className="font-semibold">Capital:</span>{" "}
                            {c?.capital}
                        </p>
                    </div>
                </div>
            </Link>
        ));
    return (
        // <div className=" flex flex-row flex-wrap justify-center gap-x-12 gap-y-16 md:justify-start md:gap-x-6">
        <div className="grid  gap-16 sm:grid-cols-[repeat(2,min-content)] md:gap-32 lg:grid-cols-[repeat(3,min-content)] lg:gap-24  xl:grid-cols-[repeat(4,min-content)]  xl:gap-8 2xl:grid-cols-[repeat(5,min-content)] 2xl:gap-12">
            <CountryList />
        </div>
    );
}
