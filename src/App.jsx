import React from "react";
import { Routes, Route } from "react-router-dom";

import First from "./page/First";
import ChooseMenu from "./page/ChooseMenu";
import DetailImageCard from "./page/DetailImageCard";
import GalleryImageCard from "./page/GalleryImageCard";
import DetailOperator from "./page/DetailOperator";
import SkinOperator from "./page/SkinOperator";

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
