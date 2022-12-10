import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../api/axios";
import Search from "../components/Search";
import ListOperator from "../components/ListOperator";

const Card = () => {
  const [state, setState] = useState([])
  const [searchResult, setSearchResults] = useState([])

   useEffect(() => {
    getData().then(json => {
      setState(json)
      return json
    }).then(json => {
      setSearchResults(json)
    })
   }, [])

  return (
    <div class="relative mx-20 my-10">
      <div class="ml-10">
        <img
          class="w-auto h-16"
          src="https://webusstatic.yo-star.com/ark_us_web/pc/img/logo02.924e2f2a.png"
          alt="Arknights_White_Logo"
        />
      </div>
      <div class="flex flex-row my-10" id="kembali">
        <Link to="/choosemenu">
          <p
            class="text-center text-2xl bg-[#010440] p-2 rounded-xl border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440] hover:border-[#010440]"
            title="Kembali"
          >
            {"< "}
          </p>
        </Link>
      </div>

      <div class="my-10">
        <p>Newest Operator</p>
      </div>

      <Search state={state} setSearchResults={setSearchResults} />
      <ListOperator class="my-10 flex flex-row flex-wrap justify-center items-center overflow-hidden grid-lines sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-auto gap-5" searchResult={searchResult} />

      
    </div>
  );
};
export default Card;
