import { Link } from "react-router-dom";

const First = () => {
  return (
    <div class="flex mt-10">
      <div class="flex-col m-auto">
        <img
          class="h-64 m-auto"
          src="https://github.com/Aceship/Arknight-Images/blob/main/factions/logo_rhodes.png?raw=true"
          alt="logo_rhodes"
        />
        <img
          class="m-auto"
          src="https://webusstatic.yo-star.com/ark_us_web/pc/img/logo02.924e2f2a.png"
          alt="Arknights_White_Logo"
        />
        <p class="mt-2 m-auto text-center text-4xl">
          Informasi dan Data Operator
        </p>
        <div class="flex flex-col m-auto px-10 py-4 justify-center items-center object-center">
          <Link to="detailimagecard">
            <p class="mt-10 text-center text-2xl bg-[#010440] p-2 rounded-xl border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440] hover:border-[#010440]">
              Mulai dari Sini!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
