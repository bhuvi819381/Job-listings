interface FilterProps {
  filters: string[];
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
}

const Filter = ({ filters, removeFilter, clearFilters }: FilterProps) => {
  return (
    <>
      {/* Display filters */}
      {filters.length > 0 && (
        <div className="absolute top-30 flex h-[72px] w-[1110px] items-center justify-between bg-yellow-300 px-8">
          {filters.map((role) => (
            <button
              key={role}
              className="flex items-center gap-2 bg-gray-300"
              onClick={() => removeFilter(role)}
            >
              <p className="cursor-pointer p-2">{role}</p>
              <span className="cursor-pointer bg-red-300 p-4">
                <img src="/images/icon-remove.svg" alt="close" />
              </span>
            </button>
          ))}
          <button
            onClick={clearFilters}
            className="cursor-pointer hover:underline"
          >
            Clear
          </button>
        </div>
      )}
    </>
  );
};

export default Filter;
