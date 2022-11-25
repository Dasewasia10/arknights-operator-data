import React from "react";
import { Routes, Route } from "react-router-dom";

import First from "./components/First";
import ChooseMenu from "./components/ChooseMenu";
import DetailImageCard from "./components/DetailImageCard";
import GalleryImageCard from "./components/GalleryImageCard" ;
import DetailOperator from "./components/DetailOperator";
import SkinOperator from "./components/SkinOperator";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="choosemenu" element={<ChooseMenu />} />
        <Route path="detailimagecard" element={<DetailImageCard />} />
        <Route path="galleryimagecard" element={<GalleryImageCard />} />
        <Route path="detailimagecard/:id" element={<DetailOperator />} />
        <Route path="galleryimagecard/:id" element={<SkinOperator />} />
      </Routes>
    </div>
  );
}

export default App;
