import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SkinOperator = () => {
  const { id } = useParams();
  const [operator, setOperator] = useState([]);

  useEffect(() => {
    const fetchReq1 = async () => {
      const response = await fetch(`https://rhodesapi.cyclic.app/api/operator`);

      const data = await response.json();

      setOperator(data);
    };

    fetchReq1();
  }, [id]);

  console.log(operator);

  return (
    <div class="mx-20 my-10">
      <h1 class="mb-10">Link to this page : {window.location.pathname}</h1>
      <div>
        <div>
          <img
            class="absolute mx-auto left-20 w-auto h-24 top-10"
            src="https://webusstatic.yo-star.com/ark_us_web/pc/img/logo02.924e2f2a.png"
            alt="Arknights_White_Logo"
          />
        </div>
        <Link to="/galleryimagecard">
          <p class="absolute bottom-5 mt-5 mb-10 text-center text-2xl bg-[#010440] p-2 rounded-xl border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440] hover:border-[#010440]">
            {"< "}Kembali
          </p>
        </Link>
        {operator.length &&
          operator.map((op) => {
            if (op._id === id) {
              return (
                <div class="flow-root">
                  <div
                    class="float-left grid grid-rows-3 grid-cols-2"
                    id="list-of-skin"
                  >
                    {Object.entries(op.art).map(([key]) => {
                      return (
                        <div>
                          <p>{key}</p>
                          <br />
                        </div>
                      );
                    })}
                  </div>
                  {Object.entries(op.art).map(([key, value]) => {
                    return (
                      <div class="relative flex flex-row-reverse float-right" id="gambar">
                        <img
                          class="w-96 h-auto"
                          key={key}
                          src={value}
                          alt="artBase"
                        />
                      </div>
                    );
                  })}
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default SkinOperator;
