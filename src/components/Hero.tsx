import Card from "@/components/Card";
import { useEffect, useState } from "react";
import type { CardProps } from "@/types/Card";

const Hero = () => {
  const [data, setData] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("JSON Not Loaded", err));
  }, []);
  return (
    <>

      <header className="bg-Green h-39 w-full bg-[url('/images/bg-header-mobile.svg')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/bg-header-desktop.svg')]"></header>

      <main className="flex h-full w-full flex-col items-center gap-5 p-4 lg:p-0 lg:pt-19 ">

        {data.map((item, i) => (
          <Card key={item.id} {...item} index={i}/>
        ))}
      </main>
    </>
  );
};
export default Hero;
