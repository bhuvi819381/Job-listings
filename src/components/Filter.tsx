import type { CardProps } from "@/types/Card";
interface FilterProps {
  data: CardProps[];
  filters: string[];
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
}

const Filter = ({ filters, removeFilter, clearFilters }: FilterProps) => {
  return (
    <div className="relative">
      {/* Display filters */}
      {filters.length > 0 && (
        <div className="absolute md:-top-12 -top-12 lg:-top-6 flex  w-full items-center justify-between rounded-lg bg-white px-8 shadow-lg p-5">
          <div className="flex gap-8 flex-wrap">
            {filters.map((role) => (
              <button
                type="button"
                key={role}
                className="bg-Green/10 flex items-center justify-center gap-2 rounded-lg"
                onClick={() => removeFilter(role)}
              >
                <span className="text-Green cursor-pointer p-2">{role}</span>
                <span className="bg-Green cursor-pointer p-2.5">
                  <img src="/images/icon-remove.svg" alt="close" />
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={clearFilters}
            className="text-Green cursor-pointer font-bold hover:underline"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
