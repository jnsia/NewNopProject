function SortOptions({
  sortOption,
  setSortOption,
}: {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="mb-4 p-2 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="default">default</option>
      <option value="asc">ascending</option>
      <option value="desc">descending</option>
    </select>
  );
}

export default SortOptions;
