// src/components/SortOptions.js

function SortOptions({ sortOption, setSortOption }) {
  return (
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="mb-4 p-2 border rounded"
    >
      <option value="name">Sort by Name</option>
      <option value="email">Sort by Email</option>
    </select>
  );
}

export default SortOptions;
