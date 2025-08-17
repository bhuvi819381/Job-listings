import Card from "@/components/Card";
import { useEffect, useState } from "react";

type CardProps = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

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

      <main className="flex h-full w-full flex-col items-center gap-5 p-2 md:p-0 md:pt-19 ">

        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </main>
    </>
  );
};
export default Hero;
