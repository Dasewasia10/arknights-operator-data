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
    <div className="mx-20 my-10">
      <div>
        <div
          id="arknightslogo"
          className="flex relative lg:fixed mt-5 mb-10 top-2 items-center justify-center lg:justify-start"
        >
          <img
            className="w-auto h-24"
            src="https://webusstatic.yo-star.com/ark_us_web/pc/img/logo02.924e2f2a.png"
            alt="Arknights_White_Logo"
          />
        </div>
        <Link to="/detail">
          <div className="flex fixed mb-10 bottom-2">
            <p className="text-center text-lg lg:text-2xl bg-[#010440] p-2 rounded-xl border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440] hover:border-[#010440]">
              {"< "}Kembali
            </p>
          </div>
        </Link>
        {operator.length &&
          operator.map((op) => {
            if (op._id === id) {
              return (
                <div className="relative grid overflow-hidden grid-cols-2 auto-rows-auto gap-5 top-1/2 left-0 right-0">
                  <div
                    id="opskin"
                    className="flex flex-col items-center justify-center"
                  >
                    {Object.entries(op.art).map(([key, value]) => {
                      return (
                        <div className="flex flex-row">
                          <div className="flex absolute text-center text-lg lg:text-2xl bg-[#010440] p-2 rounded-xl border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440] hover:border-[#010440]">
                            <a href={value}>
                              <p>{key}</p>
                            </a>
                            <br />
                          </div>
                          <div className="">
                            <img
                              className="w-96 h-auto"
                              key={key}
                              src={value}
                              alt="artBase"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default SkinOperator;
