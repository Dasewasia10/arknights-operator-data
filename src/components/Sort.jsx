import React, { useState, createRef } from "react";
import { createPopper } from "@popperjs/core";

const Sort = () => {
  // dropdown props
  const [sortItem, setSortItem] = useState(false);
  const btnSortRef = createRef();
  const popoverSortRef = createRef();
  const openSortItem = () => {
    createPopper(btnSortRef.current, popoverSortRef.current, {
      placement: "bottom-start",
    });
    setSortItem(true);
  };
  const closeSortItem = () => {
    setSortItem(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative flex align-middle w-max">
            <button
              className={
                "flex flex-row text-[#0D0D0D] bg-[#D9D9D9] hover:text-[#D9D9D9] hover:bg-[#0D0D0D] text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-100"
              }
              type="button"
              ref={btnSortRef}
              onClick={() => {
                sortItem ? closeSortItem() : openSortItem();
              }}
            >
              Sort by{"  "}
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              ref={popoverSortRef}
              className={
                (sortItem ? "block " : "hidden ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
            >
              <a
                href="#pablo"
                className={"dropdownItem"}
                onClick={(e) => e.preventDefault()}
              >
                A-Z
              </a>
              <a
                href="#pablo"
                className={"dropdownItem"}
                onClick={(e) => e.preventDefault()}
              >
                Date
              </a>
              <a
                href="#pablo"
                className={"dropdownItem"}
                onClick={(e) => e.preventDefault()}
              >
                Rarity
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sort;
