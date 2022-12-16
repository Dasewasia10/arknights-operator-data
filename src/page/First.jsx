import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="flex mt-10 bg-gradient-to-b from-[#0D0D0D] via-[#D9D9D9] to-[#0D0D0D]">
      <div className="flex flex-col mx-auto">
        <img
          className="h-64 mx-auto"
          src="https://github.com/Aceship/Arknight-Images/blob/main/factions/logo_rhodes.png?raw=true"
          alt="logo_rhodes"
        />
        <img
          className="h-24 lg:h-auto mx-auto"
          src="https://webusstatic.yo-star.com/ark_us_web/pc/img/logo02.924e2f2a.png"
          alt="Arknights_White_Logo"
        />
        <p className="mt-4 mx-20 text-center text-2xl lg:text-4xl">
          Informasi dan Data Operator
        </p>
        <div className="flex flex-col m-auto px-10 py-4 justify-center items-center object-center">
          <Link to="choosemenu">
            <p className="mt-10 text-center text-2xl bg-[#010440] py-2 px-5 rounded-xl border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440] hover:border-[#010440]">
              Mulai dari Sini!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;