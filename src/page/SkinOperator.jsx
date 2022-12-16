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
    <div className="mx-10 my-10">
      <div>
        <div className="flex justify-center">
          <img
            className="w-auto h-16"
            src="https://webusstatic.yo-star.com/ark_us_web/pc/img/logo02.924e2f2a.png"
            alt="Arknights_White_Logo"
          />
        </div>
        <Link to="/gallery">
          <div className="flex fixed top-36 left-20">
            <p className="text-center text-lg lg:text-xl bg-[#010440] p-2 rounded-xl border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440] hover:border-[#010440]">
              {"< "}Kembali
            </p>
          </div>
        </Link>
        {operator.length &&
          operator.map((op) => {
            if (op._id === id) {
              return (
                <div
                  id="opskin"
                  className="flex h-screen w-full justify-center"
                >
                  <div className="absolute grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4 mt-32 w-auto h-auto">
                    {Object.entries(op.art).map(([key, value]) => {
                      return (
                        <div>
                          <div className="text-center text-xl lg:text-2xl bg-[#010440] p-2 rounded-xl border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440] hover:border-[#010440]">
                            <a href={value} target="_blank">
                              {key}
                              <img
                                className="w-56 md:w-64 lg:w-80 h-auto"
                                key={key}
                                src={value}
                                alt="artBase"
                              />
                            </a>
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