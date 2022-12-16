import React from "react";

const SortDropdown = () => {
  return (
    <div className="container">
      <select
        name="sortname"
        id="sortname"
        className="flex flex-row text-[#0D0D0D] bg-[#D9D9D9] hover:text-[#D9D9D9] hover:bg-[#0D0D0D] text-lg px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-100"
      >
        <option value="" className="dropdownItem">
          Sort by...
        </option>
        <option value="name" className="dropdownItem">
          A-Z
        </option>
      </select>
    </div>
  );
};

export default SortDropdown;