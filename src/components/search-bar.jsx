export default function Searchbar({ search, setSearch }) {
    return (
        <div className="light-mode-elements rounded border border-gray-100 p-3 shadow dark:border-gray-900 dark:bg-gray-800 dark:shadow-gray-950">
            <input
                className="w-full outline-none dark:border-gray-900 dark:bg-gray-800 dark:shadow-gray-950"
                type="search"
                placeholder="Search for a country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}
