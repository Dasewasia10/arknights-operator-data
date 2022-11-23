import React from "react";
import { Routes, Route } from "react-router-dom";
import First from "./components/First";
import DetailImageCard from "./components/DetailImageCard";
import DetailOperator from "./components/DetailOperator";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="detailimagecard" element={<DetailImageCard />} />
        <Route path="detailimagecard/:id" element={<DetailOperator />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
