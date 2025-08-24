import { useEffect, useState } from "react";
import Card from "@/components/Card";
import type { CardProps } from "@/types/Card";
import Filter from "@/components/Filter";

type Props = {
  filters: string[];
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
};

const Hero = () => {
  const [data, setData] = useState<CardProps[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("JSON Not Loaded", err));
  }, []);

  // Add a filter
  const addFilter = (role: string) => {
    if (!filters.includes(role)) {
      setFilters([...filters, role]);
    }
  };

  // Remove a filter
  const removeFilter = (role: string) => {
    setFilters(filters.filter((f) => f !== role));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters([]);
  };

  // Filtered data based on selected filters
  const filteredData =
    filters.length === 0
      ? data
      : data.filter((item) =>
          filters.every((f) =>
            [item.role, item.level, ...item.languages, ...item.tools].includes(
              f,
            ),
          ),
        );

  return (
    <>
      <header className="bg-Green relative h-39 w-full bg-[url('/images/bg-header-mobile.svg')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/bg-header-desktop.svg')]"></header>

      <main className="mx-auto p-4 md:w-full lg:w-[69rem] lg:p-0 ">
        <Filter
          data={data}
          filters={filters}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />
        <div className="flex h-full w-full flex-col items-center gap-5 lg:pt-19">
          {filteredData.map((item, i) => (
            <Card key={item.id} {...item} index={i} addFilter={addFilter} />
          ))}
        </div>
      </main>
    </>
  );
};
export default Hero;
