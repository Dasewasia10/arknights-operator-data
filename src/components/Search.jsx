import React, { Component } from "react";

class Search extends Component {
  token = null;
  state = {
    query: "",
    operator_icon: [],
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      query: value,
    });

    this.search(value);
  };

  search = (query) => {
    const url = `https://dasewasia10.github.io/AKLogo-Addition/data/operator_icon.json`;
    const token = {};
    this.token = token;

    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        if (this.token === token) {
          this.setState({ operator_icon: data.results });
        }
      });
  };

  componentDidMount() {
    this.search("");
  }

  render() {
    const { operator_icon } = this.state;
    return (
      <form>
        <input
          type="text"
          className="search-box"
          placeholder="Search for..."
          onChange={this.onChange}
        />
        {operator_icon.map((operator, index) => (
          <div class="box text-center items-center flex flex-row" key={index}>
          <img
            class="py-2 h-36 w-auto rounded-2xl"
            src={operator.iconImage}
            alt={operator.name}
          />
          <p class="pl-5">{operator.name}</p>
        </div>
        ))}
      </form>
    );
  }
}

export default Search;
