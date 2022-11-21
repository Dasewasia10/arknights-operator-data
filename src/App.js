import React from "react";
import { Routes, Route } from "react-router-dom";
import First from "./components/First";
import ImageCard from "./components/ImageCard";
import DetailKarakter from "./components/DetailKarakter";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="imagecard" element={<ImageCard />} />
        <Route path="detailkarakter" element={<DetailKarakter />} />
      </Routes>
    </div>
  );
}

export default App;
