import React, { useState, useEffect } from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { FiMap } from "react-icons/fi";
import data from "../data.json";
import { Filter, Navbar, Ad } from "../components";
import { useSearchParams } from "react-router-dom";

const Ads = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm =
    searchParams.get("q") !== null ? searchParams.get("q") : "";
  const [search, setSearch] = useState(searchTerm);
  const [posts, setPosts] = useState(data);

  useEffect(() => {
    if (!searchTerm) {
      setPosts(data);
    } else {
      setPosts(
        data.filter((item) => {
          return item.adress.toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
    }
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <Filter search={search} setSearch={setSearch} />
      <div className="container mx-auto flex flex-col gap-4 mt-6 px-32">
        <h1 className="font-bold text-3xl text-gray-800">
          Аренда помещений в Самаре
        </h1>
        <div className="flex items-center gap-4">
          <p className="">Найдено 8 004 объявления</p>
          <button className="py-1 flex items-center px-3 rounded gap-2 text-blue-500 hover:bg-gray-300 font-medium">
            <FiMap className="text-xl" />
            Фильтровать по:
          </button>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-4 mt-4 px-32">
        {posts.map((item, index) => {
          return (
            <Ad
              title={item.title}
              adress={item.adress}
              image={item.image}
              description={item.description}
              price={item.price}
              apacity={item.apacity}
              period={item.period}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Ads;
