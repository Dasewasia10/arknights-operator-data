import React from "react";
import debounce from "lodash.debounce";

const Search = ({ state, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(state);

    const resultArray = state.filter((state) =>
      state.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResults(resultArray);
  };
  const debounceOnchange = debounce(handleSearchChange, 500);
  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="pl-2 outline-2 outline-[#010440] rounded text-[#010440]"
          type="text"
          id="search"
          placeholder="Cari Nama..."
          onChange={debounceOnchange}
        />
      </form>
    </header>
  );
};

export default Search;
