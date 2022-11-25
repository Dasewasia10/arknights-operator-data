import React from "react";
import { Routes, Route } from "react-router-dom";

import First from "./page/First";
import ChooseMenu from "./page/ChooseMenu";
import Card from "./page/Card";
import DetailOperator from "./page/DetailOperator";
import SkinOperator from "./page/SkinOperator";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="choosemenu" element={<ChooseMenu />} />
        <Route path="detail" element={<Card />} />
        <Route path="gallery" element={<Card />} />
        <Route path="detail/:id" element={<DetailOperator />} />
        <Route path="gallery/:id" element={<SkinOperator />} />
      </Routes>
    </div>
  );
}

export default App;
