import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DetailOperator = () => {
  const { id } = useParams();
  const [operator, setOperator] = useState([]);

  const rarity = operator.map((rarity) => {
    const star =
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png";

    const stars = [];

    if (rarity._id === id) {
      for (let i = 0; i < rarity.rarity; i++) {
        stars.push(<img class="w-16 h-auto" key={i} src={star} alt="star" />);
      }
      return stars;
    }
  });

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
            class="m-auto"
            src="https://webusstatic.yo-star.com/ark_us_web/pc/img/logo02.924e2f2a.png"
            alt="Arknights_White_Logo"
          />
        </div>
        <Link to="/detailimagecard">
          <p class="absolute bottom-5 mt-5 mb-10 text-center text-2xl bg-[#010440] p-2 rounded-xl border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440] hover:border-[#010440]">
            {"< "}Kembali
          </p>
        </Link>
        {operator.length &&
          operator.map((op) => {
            if (op._id === id) {
              return (
                <div>
                  <div id="gambar">
                    <img src={op.art.Base} alt="artBase" />
                  </div>
                  <div id="name-rarity">
                    <p>
                      {op.name} - {rarity}
                    </p>
                  </div>
                  <div id="main-data">
                    <p>"{op.quote}"</p>
                    <p>{op.artist}</p>
                    <p>{op.description}</p>
                    <p>{op.biography}</p>
                    <br />
                    <p>Lore :</p>
                    <p>{op.lore.Gender}</p>
                    <p>{op.lore[`Place of Birth`]}</p>
                    <p>{op.lore.Birthday}</p>
                    <p>{op.lore.Race}</p>
                    <p>{op.lore.Height}</p>
                    <p>{op.lore[`Combat Experience`]}</p>
                    <p>{op.lore[`Infection Status`]}</p>
                    <p>{op.lore[`Physical Strength`]}</p>
                    <p>{op.lore[`Physiological Endurance`]}</p>
                    <p>{op.lore[`Tactical Planning`]}</p>
                    <p>{op.lore[`Combat Skill`]}</p>
                    <p>{op.lore[`Originium Adaptability`]}</p>
                    <br />
                    <p>Statistics :</p>
                    <p>Base</p>
                    <p>{op.statistics.base.hp}</p>
                    <p>{op.statistics.base.atk}</p>
                    <p>{op.statistics.base.def}</p>
                    <p>{op.statistics.base.resist}</p>
                    <p>{op.statistics.base.redeploy}</p>
                    <p>{op.statistics.base.cost}</p>
                    <p>{op.statistics.base.block}</p>
                    <p>{op.statistics.base.interval}</p>
                    <br />
                    <p>E0</p>
                    <p>{op.statistics.e0max.hp}</p>
                    <p>{op.statistics.e0max.atk}</p>
                    <p>{op.statistics.e0max.def}</p>
                    <p>{op.statistics.e0max.resist}</p>
                    <p>{op.statistics.e0max.redeploy}</p>
                    <p>{op.statistics.e0max.cost}</p>
                    <p>{op.statistics.e0max.block}</p>
                    <p>{op.statistics.e0max.interval}</p>
                    <br />
                    <p>E1</p>
                    <p>{op.statistics.e1max.hp}</p>
                    <p>{op.statistics.e1max.atk}</p>
                    <p>{op.statistics.e1max.def}</p>
                    <p>{op.statistics.e1max.resist}</p>
                    <p>{op.statistics.e1max.redeploy}</p>
                    <p>{op.statistics.e1max.cost}</p>
                    <p>{op.statistics.e1max.block}</p>
                    <p>{op.statistics.e1max.interval}</p>
                    <br />
                    <p>E2</p>
                    <p>{op.statistics.e2max.hp}</p>
                    <p>{op.statistics.e2max.atk}</p>
                    <p>{op.statistics.e2max.def}</p>
                    <p>{op.statistics.e2max.resist}</p>
                    <p>{op.statistics.e2max.redeploy}</p>
                    <p>{op.statistics.e2max.cost}</p>
                    <p>{op.statistics.e2max.block}</p>
                    <p>{op.statistics.e2max.interval}</p>
                    <br />
                    <div id="talents">
                      <p>Talent :</p>
                      {op.talents.map((talent) => {
                        return (
                          <div>
                            <ul>
                              <li>{talent.name}</li>
                              <li>{talent.value}</li>
                            </ul>
                            <br />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div id="faction-class">
                    <p>Faction : {op.affiliation}</p>
                    <p>Class : {op.class[0]}</p>
                    <p>Subclass : {op.class[1]}</p>
                    <br />
                  </div>
                  <div id="availability">
                    <p>Availablity in :</p>
                    <p>Server : {op.availability}</p>
                    <p>Headhunting : {op.headhunting}</p>
                    <p>Recruitable : {op.recruitable}</p>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default DetailOperator;