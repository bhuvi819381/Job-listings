const Card = ({ ...item }) => {
  return (
    <div className={` ${item.featured && "border-l-4 border-Green"} flex w-full md:w-[69rem] items-center justify-between rounded-lg bg-white p-8 shadow-lg md:flex-row flex-col`}>
      {/* Left Side of Card */}

      <div className="flex justify-center items-center gap-7 mb-5 md:mb-0">
        <img src={item.logo} alt={item.company} loading="lazy" />

        <div className="flex flex-col gap-1">

          {/* company */}
          <div className="flex gap-3">
            <span className="text-Green font-bold text-md">{item.company}</span>
            {item.new && (
              <span className="rounded-full bg-Green px-2 py-1 text-xs font-bold text-white ">
                NEW!
              </span>
            )}
            {item.featured && (
              <span className="rounded-full bg-Dark-Green px-2 py-1 text-xs font-bold text-white">
                FEATURED
              </span>
            )}
          </div>

          {/* position */}

            <h1 className="text-xl font-bold text-Dark-Green">{item.position}</h1>


          {/* details */}
          <div className="flex gap-10 font-semibold text-Gray">
            <span>{item.postedAt}</span>
            <span>{item.contract}</span>
            <span>{item.location}</span>
          </div>
        </div>
      </div>

      {/* Right Side of Card */}

      <div className="flex gap-3 border-t md:border-t-0 border-Gray pt-4 md:pt-0 flex-wrap">
        <span className="bg-Green/10 px-2 py-1 rounded-md text-Green font-bold">{item.role}</span>
        <span className="bg-Green/10 px-2 py-1 rounded-md text-Green font-bold">{item.level}</span>
        <span className="flex gap-3">
          {item.languages.map((lang: string, index: string) => (
            <span key={index} className="bg-Green/10 px-2 py-1 rounded-md text-Green font-bold">{lang}</span>
          ))}
        </span>
        <span className="flex gap-3">{
          item.tools.map((tool: string, index: string) => (
            <span key={index} className="bg-Green/10 px-2 py-1 rounded-md text-Green font-bold">{tool}</span>
          ))
        }</span>
      </div>
    </div>
  );
};
export default Card;
