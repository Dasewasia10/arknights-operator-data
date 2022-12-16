import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../api/axios";
import Search from "../components/Search";
import ListOperator from "../components/ListOperator";
import Filter from "../components/Filter";

const Card = () => {
  const [state, setState] = useState([]);
  const [searchResult, setSearchResults] = useState([]);
  const [limit, setLimit] = useState(10);
  const [filtered, setFiltered] = useState([]);
  const [activeClass, setActiveClass] = useState('')

  const showMoreCards = () => {
    setLimit((prevValue) => prevValue + 10);
  };

  useEffect(() => {
    getData()
      .then((json) => {
        setState(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);

  return (
    <div className="relative mx-20 my-10">
      <div className="flex justify-center">
        <img
          className="w-auto h-16"
          src="https://webusstatic.yo-star.com/ark_us_web/pc/img/logo02.924e2f2a.png"
          alt="Arknights_White_Logo"
        />
      </div>
      <div className="flex flex-col lg:flex-row my-10 justify-center">
        <Link to="/choosemenu">
          <p
            className="text-center text-2xl bg-[#010440] p-2 rounded-xl border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440] hover:border-[#010440]"
            title="Kembali"
            id="kembali"
          >
            {"< "}
          </p>
        </Link>
        <div className="flex ml-0 mt-3 lg:mt-0 lg:ml-5 items-center justify-center">
          <Search state={state} setSearchResults={setSearchResults} />
        </div>
        <div className="flex ml-0 mt-3 lg:mt-0 lg:ml-5 items-center justify-center">
          <p>atau</p>
        </div>
        <div className="flex ml-0 mt-3 lg:mt-0 lg:ml-5 items-center justify-center">
          <Search state={state} setSearchResults={setSearchResults} />
        </div>
      </div>

      <div className="flex mt-10 mb-5 justify-center lg:justify-start text-xl">
        <p>Newest Operator</p>
      </div>
      <ListOperator
        className="my-10 flex flex-row flex-wrap justify-center items-center overflow-hidden grid-lines sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-auto gap-5"
        searchResult={searchResult}
        filtered={filtered}
        limit={limit}
      />
      <div className="flex justify-center">
        <button
          className="text-center text-lg bg-[#010440] p-2 rounded-xl border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440] hover:border-[#010440]"
          title="Muat Lebih..."
          onClick={showMoreCards}
        >
          Muat Lebih...
        </button>
      </div>
    </div>
  );
};
export default Card;
