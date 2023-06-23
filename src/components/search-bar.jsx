export default function Searchbar({ search, setSearch }) {
  return (
    <div className="light-mode-elements rounded border border-gray-100 p-3 shadow">
      <input
        className="outline-none"
        type="search"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
