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
        stars.push(<img class="w-7 h-auto" key={i} src={star} alt="star" />);
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
    <div className="mx-5 lg:mx-20 mt-10">
      <div>
        <div className="flex justify-center">
          <img
            className="w-auto h-16"
            src="https://webusstatic.yo-star.com/ark_us_web/pc/img/logo02.924e2f2a.png"
            alt="Arknights_White_Logo"
          />
        </div>
        <Link to="/detail">
          <div className="flex fixed mb-10 bottom-2">
            <p className="text-center text-lg lg:text-xl bg-[#010440] p-2 rounded-xl border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440] hover:border-[#010440]">
              {"< "}Kembali
            </p>
          </div>
        </Link>
        {operator.length &&
          operator.map((op) => {
            if (op._id === id) {
              return (
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row">
                  <div id="detailgambar" className="flex lg:items-center">
                    <img src={op.art.Base} alt="artBase" />
                  </div>
                  <div
                    id="detaildata"
                    className="w-auto lg:w-[120rem] lg:h-[34rem] overflow-y-auto mt-2 mb-28 lg:mb-0 border-4 border-[#D9D9D9] rounded-2xl p-2 text-md lg:text-lg"
                  >
                    <div id="name-rarity">
                      <div className="flex flex-row items-center gap-2 mb-4">
                        <p className="text-2xl">{op.name}</p>
                        <div className="flex flex-row">{rarity}</div>
                      </div>
                    </div>
                    <div id="main-data">
                      <p>"{op.quote}"</p>
                      <p>{op.artist}</p>
                      <p>{op.description}</p>
                      <p>{op.biography}</p>
                      <br />
                      <p className="text-2xl">Lore</p>
                      <p>Gender : {op.lore.Gender}</p>
                      <p>Birth : {op.lore[`Place of Birth`]}</p>
                      <p>Birthday : {op.lore.Birthday}</p>
                      <p>Race : {op.lore.Race}</p>
                      <p>Height : {op.lore.Height}</p>
                      <p>Combat Experience : {op.lore[`Combat Experience`]}</p>
                      <p>Infection : {op.lore[`Infection Status`]}</p>
                      <p>Physical Strength{op.lore[`Physical Strength`]}</p>
                      <p>Physiological Endurance : {op.lore[`Physiological Endurance`]}</p>
                      <p>Tactical Planning : {op.lore[`Tactical Planning`]}</p>
                      <p>Combat Skill : {op.lore[`Combat Skill`]}</p>
                      <p>Originium Adaptability : {op.lore[`Originium Adaptability`]}</p>
                      <br/>
                      <p className="text-2xl">Statistics :</p>
                      <p>Base</p>
                      <p>HP  : {op.statistics.base.hp}</p>
                      <p>ATK : {op.statistics.base.atk}</p>
                      <p>DEF : {op.statistics.base.def}</p>
                      <p>RESIST : {op.statistics.base.resist}</p>
                      <p>REDEPLOY : {op.statistics.base.redeploy}</p>
                      <p>COST : {op.statistics.base.cost}</p>
                      <p>BLOCK : {op.statistics.base.block}</p>
                      <p>INTERVAL : {op.statistics.base.interval}</p>
                      <br />
                      <p className="text-2xl">E0</p>
                      <p>HP : {op.statistics.e0max.hp}</p>
                      <p>ATK :{op.statistics.e0max.atk}</p>
                      <p>DEF :{op.statistics.e0max.def}</p>
                      <p>RESIST :{op.statistics.e0max.resist}</p>
                      <p>REDPLOY : {op.statistics.e0max.redeploy}</p>
                      <p>COST : {op.statistics.e0max.cost}</p>
                      <p>BLOCK : {op.statistics.e0max.block}</p>
                      <p>INTERVAL : {op.statistics.e0max.interval}</p>
                      <br />
                      <p className="text-2xl">E1</p>
                      <p>HP : {op.statistics.e1max.hp}</p>
                      <p>ATK : {op.statistics.e1max.atk}</p>
                      <p>DEF : {op.statistics.e1max.def}</p>
                      <p>RESIST : {op.statistics.e1max.resist}</p>
                      <p>DEPLOY : {op.statistics.e1max.redeploy}</p>
                      <p>COST : {op.statistics.e1max.cost}</p>
                      <p>BLOCK : {op.statistics.e1max.block}</p>
                      <p>INTERVAL : {op.statistics.e1max.interval}</p>
                      <br />
                      <p>E2</p>
                      <p>HP : {op.statistics.e2max.hp}</p>
                      <p>ATK : {op.statistics.e2max.atk}</p>
                      <p>DEF : {op.statistics.e2max.def}</p>
                      <p>RESIST : {op.statistics.e2max.resist}</p>
                      <p>REDPLOY : {op.statistics.e2max.redeploy}</p>
                      <p>COST : {op.statistics.e2max.cost}</p>
                      <p>BLOCK : {op.statistics.e2max.block}</p>
                      <p>INTERVAL : {op.statistics.e2max.interval}</p>
                      <br />
                      <div id="talents">
                        <p className="text-2xl">Talent :</p>
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
                      <p className="text-2xl">Availablity in :</p>
                      <p>Server : {op.availability}</p>
                      <p>Headhunting : {op.headhunting}</p>
                      <p>Recruitable : {op.recruitable}</p>
                    </div>
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
