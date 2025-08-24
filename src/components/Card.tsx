import { motion } from "motion/react";
import type { CardProps } from "@/types/Card";

type cardWithIndex = CardProps & {
  index: number;
  addFilter: (filter: string) => void;
};

const Card = ({ index, addFilter, ...item }: cardWithIndex) => {
  return (
    <motion.div
      className={` ${item.featured && "border-Green border-l-4"} flex w-full flex-col items-center justify-between rounded-lg bg-white p-8 shadow-lg md:w-full md:flex-row lg:w-[69rem]`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      {/* Left Side of Card */}

      <div className="mb-5 flex flex-col items-center justify-center gap-3 md:mb-0 md:flex-row md:gap-7">
        <img src={item.logo} alt={item.company} loading="lazy" />

        <div className="flex flex-col gap-1">
          {/* company */}
          <div className="flex gap-1 md:gap-3">
            <span className="text-Green text-md font-bold">{item.company}</span>
            {item.new && (
              <span className="bg-Green rounded-full px-2 py-1 text-xs font-bold text-white">
                NEW!
              </span>
            )}
            {item.featured && (
              <span className="bg-Dark-Green rounded-full px-2 py-1 text-xs font-bold text-white">
                FEATURED
              </span>
            )}
          </div>

          {/* position */}

          <h1 className="text-Dark-Green text-xl font-bold">{item.position}</h1>

          {/* details */}
          <div className="text-Gray flex gap-10 font-semibold">
            <span>{item.postedAt}</span>
            <span>{item.contract}</span>
            <span>{item.location}</span>
          </div>
        </div>
      </div>

      {/* Right Side of Card */}

      <div className="border-Gray flex flex-wrap gap-3 border-t pt-4 md:border-t-0 md:pt-0">
        <button
          className="bg-Green/10 text-Green cursor-pointer rounded-md px-2 py-1 font-bold"
          onClick={() => addFilter(item.role)}
        >
          {item.role}
        </button>
        <button
          className="bg-Green/10 text-Green cursor-pointer rounded-md px-2 py-1 font-bold"
          onClick={() => addFilter(item.level)}
        >
          {item.level}
        </button>
        <span className="flex gap-3">
          {item.languages.map((lang: string, index: number) => (
            <button
              key={index}
              className="bg-Green/10 text-Green cursor-pointer rounded-md px-2 py-1 font-bold"
              onClick={() => addFilter(lang)}
            >
              {lang}
            </button>
          ))}
        </span>
        <span className="flex gap-3">
          {item.tools.map((tool: string, index: number) => (
            <button
              key={index}
              className="bg-Green/10 text-Green cursor-pointer rounded-md px-2 py-1 font-bold"
              onClick={() => addFilter(tool)}
            >
              {tool}
            </button>
          ))}
        </span>
      </div>
    </motion.div>
  );
};
export default Card;
