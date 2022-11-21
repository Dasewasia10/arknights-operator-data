import React, { Component } from "react";
import { Link } from "react-router-dom";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operator_icon: [],
      faction: [],
      opclass: [],
    };
  }

  componentDidMount() {
    const fetchReq1 = fetch(
      `https://dasewasia10.github.io/AKLogo-Addition/data/operator_icon.json`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ operator_icon: data }));

    const fetchReq2 = fetch(
      `https://dasewasia10.github.io/AKLogo-Addition/data/faction.json`
    )
      .then((res) => res.json())
      .then((data2) => this.setState({ faction: data2 }));

    const fetchReq3 = fetch(
      `https://dasewasia10.github.io/AKLogo-Addition/data/class.json`
    )
      .then((res) => res.json())
      .then((data3) => this.setState({ opclass: data3 }));

    // do fetch requests in parallel
    // using the Promise.all() method
    const allData = Promise.all([fetchReq1, fetchReq2, fetchReq3]);

    // attach then() handler to the allData Promise
    allData.then((res) => console.log(res));
  }

  render() {
    const { operator_icon, faction, opclass } = this.state;
    return (
      <div class="mx-20 my-10">
        <div>
          <Link to="/">
            <p class="mt-5 text-center text-2xl bg-[#010440] p-2 rounded-xl border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440] hover:border-[#010440]">
              {"< "}Kembali
            </p>
          </Link>
        </div>
        <p class="mt-20 mb-5 text-center">Operator Icon</p>
        <div class="grid overflow-hidden grid-lines grid-cols-4 auto-rows-auto gap-5">
          {operator_icon.map((item, index) => (
            <div class="box text-center items-center flex flex-row" key={index}>
              <img
                class="py-2 h-36 w-auto rounded-xl"
                src={item.iconImage}
                alt={item.name}
              />
              <p class="pl-5">{item.name}</p>
            </div>
          ))}
        </div>

        <p class="mt-20 mb-5 text-center">Faction</p>
        <div class="grid overflow-hidden grid-lines grid-cols-4 auto-rows-auto gap-5">
          {faction.map((item, index) => (
            <div class="box text-center items-center flex flex-row" key={index}>
              <img
                class="py-2 h-36 w-auto rounded-xl"
                src={item.iconImage}
                alt={item.name}
              />
              <p class="pl-5">{item.name}</p>
            </div>
          ))}
        </div>

        <p class="mt-20 mb-5 text-center">Class</p>
        <div class="grid overflow-hidden grid-lines grid-cols-4 auto-rows-auto gap-5">
          {opclass.map((item, index) => (
            <div class="box text-center items-center flex flex-row" key={index}>
              <img
                class="py-2 h-36 w-auto rounded-xl"
                src={item.iconImage}
                alt={item.name}
              />
              <p class="pl-5">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageCard;
