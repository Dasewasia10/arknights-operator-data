import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Sort from "../components/Sort";
import Filter from "../components/Filter";

const DetailImageCard = () => {
  const [operator, setOperator] = useState([]);

  useEffect(() => {
    const fetchReq1 = async () => {
      const response = await fetch(`https://rhodesapi.cyclic.app/api/operator`);

      const data = await response.json();

      const pageSize = 24;
      const page = 1;
      const pageData = data.slice(page * pageSize - pageSize, page * pageSize);

      setOperator(pageData);
    };

    fetchReq1();
  }, []);

  return (
    <div class="relative mx-20 my-10">
      <div class="absolute">
        <img
          class="mx-auto w-auto h-16 ml-10"
          src="https://webusstatic.yo-star.com/ark_us_web/pc/img/logo02.924e2f2a.png"
          alt="Arknights_White_Logo"
        />
      </div>
      <div class="absolute clearfix mt-28 mb-10">
        <div class="flex flex-row float-left">
          <div id="kembali">
            <Link to="/choosemenu">
              <p
                class="text-center text-2xl bg-[#010440] p-2 rounded-xl border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440] hover:border-[#010440]"
                title="Kembali"
              >
                {"< "}
              </p>
            </Link>
          </div>

          <div id="search-bar" class="">
            <Search />
          </div>

          <div id="sort" class="">
            <Sort />
          </div>
        </div>

        <div id="filter-bar" class="float-right">
          <Filter />
        </div>
      </div>

      <div class="absolute mt-48">
        <p>Newest Operator</p>
      </div>

      <div class="absolute grid mt-60 mb-24 content-center overflow-hidden grid-lines sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-auto gap-5">
        {operator.map((operator, index) => (
          <Link to={{ pathname: `${operator._id}` }}>
            <div
              class="box text-center items-center flex flex-row"
              key={index}
              title={operator.name}
            >
              <img
                class="py-2 h-36 w-auto rounded-2xl"
                src={operator.art.Base}
                alt={operator.name}
              />
              <p class="flex pl-3 pr-3 text-center">{operator.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default DetailImageCard;
