import React from "react";
import debounce from "lodash.debounce";

const Filter = ({ state, setFiltered }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(state);

    const resultArray = state.filter((state) =>
      state.class.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResults(resultArray);
  };
  const debounceOnchange = debounce(handleSearchChange, 500);
  return (
    <div className="container">
      <select name="class" id="class">
        <option value="Caster">Caster</option>
        <option value=""></option>
      </select>
    </div>
  );
};

export default Filter;
