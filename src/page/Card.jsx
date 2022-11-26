import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [operator, setOperator] = useState([]);

  useEffect(() => {
    const fetchReq1 = async () => {
      const response = await fetch(`https://rhodesapi.cyclic.app/api/operator`);

      const data = await response.json();

      const pageSize = 20;
      const pageData = data.slice(0, pageSize);

      setOperator(pageData);
    };

    fetchReq1();
  }, []);

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

      <div class="my-10 flex flex-row flex-wrap justify-center items-center overflow-hidden grid-lines sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-auto gap-5">
        {operator.map((operator, index) => (
          <Link to={{ pathname: `${operator._id}` }}>
            <div
              class="box text-center items-center flex flex-row"
              key={index}
              title={operator.name}
            >
              <img
                class="py-2 h-36 hover:h-40 w-auto"
                src={operator.art.Base}
                alt={operator.name}
                title={operator.name}
              />
              <p class="flex px-3 pr-3 text-center">{operator.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Card;
