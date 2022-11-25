import { Link } from "react-router-dom";

const ChooseMenu = () => {
  return (
    <div class="flex mt-5 bg-gradient-to-r from-[#0D0D0D] to-[#D9D9D9]">
      <div class="flex-col m-auto">
        <img
          class="h-48 m-auto"
          src="https://github.com/Aceship/Arknight-Images/blob/main/factions/logo_rhodes.png?raw=true"
          alt="logo_rhodes"
        />
        <img
          class="h-28 m-auto"
          src="https://webusstatic.yo-star.com/ark_us_web/pc/img/logo02.924e2f2a.png"
          alt="Arknights_White_Logo"
        />
        <p class="mt-5 m-auto text-center text-2xl">
          Informasi dan Data Operator
        </p>
        <div class="flex flex-row gap-20 mt-10 mx-auto px-5 py-4 justify-center items-center object-center">
          <Link to="/detail">
            <div class="box text-center items-center flex flex-row">
              <img
                class="h-72 hover:h-80 w-auto rounded-2xl"
                src="https://gamepress.gg/arknights/sites/arknights/files/2020-01/char_002_amiya_winter%231_1.png"
                alt="biografioperator"
              />
              <p class="flex px-5 text-2xl justify-center">Biografi Operator</p>
            </div>
          </Link>
          <Link to="/gallery">
            <div class="box text-center items-center flex flex-row">
              <img
                class="h-72 hover:h-80 w-auto rounded-2xl"
                src="https://gamepress.gg/arknights/sites/arknights/files/2020-05/char_113_cqbw_1.png"
                alt="galeriskin"
              />
              <p class="flex px-5 text-2xl justify-center">Galeri Skin</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseMenu;
