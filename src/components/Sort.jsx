import React from "react";

const Sort = () => {
  return (
    <header>
      <div class="relative">
        <input type="checkbox" id="sortbox" class="hidden absolute" />
        <label
          for="sortbox"
          class="flex items-center space-x-1 cursor-pointer rounded-xl border-2 p-2 border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#010440]"
        >
          <span class="text-lg">Sort By</span>
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
        </label>

        <div
          id="sortboxmenu"
          class="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10"
        >
          <ul class="block text-right text-gray-900">
            <li>
              <a href="#" class="block px-3 py-2 hover:bg-gray-200">
                Featured
              </a>
            </li>
            <li>
              <a href="#" class="block px-3 py-2 hover:bg-gray-200">
                Newest
              </a>
            </li>
            <li>
              <a href="#" class="block px-3 py-2 hover:bg-gray-200">
                Price: Low to High
              </a>
            </li>
            <li>
              <a href="#" class="block px-3 py-2 hover:bg-gray-200">
                Price: High to Low
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Sort;
