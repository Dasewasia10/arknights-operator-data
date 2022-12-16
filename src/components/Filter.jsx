import React from "react";
import debounce from "lodash.debounce";

const Filter = ({ state, setFilterResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleFilterChange = (e) => {
    if (!e.target.value) return setFilterResults(state);

    const resultArray = state.filter((state) =>
      state.class[0].includes(e.target.value)
    );

    setFilterResults(resultArray);
  };
  const debounceOnchange = debounce(handleFilterChange, 500);
  return (
    <div className="container">
      <select
        name="class"
        id="class"
        className="flex flex-row text-[#0D0D0D] bg-[#D9D9D9] hover:text-[#D9D9D9] hover:bg-[#0D0D0D] text-lg px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-100"
        onChange={debounceOnchange}
      >
        <option value="" className="dropdownItem">
          Filter by...
        </option>
        <option value="Vanguard" className="dropdownItem">
          Vanguard
        </option>
        <option value="Guard" className="dropdownItem">
          Guard
        </option>
        <option value="Defender" className="dropdownItem">
          Defender
        </option>
        <option value="Specialist" className="dropdownItem">
          Specialist
        </option>
        <option value="Sniper" className="dropdownItem">
          Sniper
        </option>
        <option value="Caster" className="dropdownItem">
          Caster
        </option>
        <option value="Medic" className="dropdownItem">
          Medic
        </option>
        <option value="Supporter" className="dropdownItem">
          Supporter
        </option>
      </select>
    </div>
  );
};

export default Filter;
