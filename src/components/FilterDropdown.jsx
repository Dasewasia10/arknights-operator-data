import React, { useState } from "react";

const FilterDropdown = () => {
  return (
    <div className="container">
      <select
        name="class"
        id="class"
        className="flex flex-row text-[#0D0D0D] bg-[#D9D9D9] hover:text-[#D9D9D9] hover:bg-[#0D0D0D] text-lg px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-100"
      >
        <option value="" className="dropdownItem">
          Filter by...
        </option>
        <option value={"vanguard"} name="Vanguard" className="dropdownItem">
          Vanguard
        </option>
        <option value={"guard"} name="Guard" className="dropdownItem">
          Guard
        </option>
        <option value={"defender"} name="Defender" className="dropdownItem">
          Defender
        </option>
        <option value={"specialist"} name="Specialist" className="dropdownItem">
          Specialist
        </option>
        <option value={"sniper"} name="Sniper" className="dropdownItem">
          Sniper
        </option>
        <option value={"caster"} name="Caster" className="dropdownItem">
          Caster
        </option>
        <option value={"medic"} name="Medic" className="dropdownItem">
          Medic
        </option>
        <option value={"supporter"} name="Supporter" className="dropdownItem">
          Supporter
        </option>
      </select>
    </div>
  );
};

export default FilterDropdown;
