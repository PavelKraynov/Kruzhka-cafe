import React from "react";
// import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import General from "../pages/General/general";
import Address from "../pages/Address/address";
import Sale from '../pages/sale/sale'
import Menu from '../pages/menu/menu'
import Translation from '../pages/translation/translation'
// import MenuPdf from "../pages/menu/pdf/menuPdf";
const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/General" element={<General />} />
        <Route path="/Address" element={<Address />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Translation" element={<Translation />} />
        <Route path="/" element={<Navigate to="General" />} />
      </Routes>
    </Router>
  );
};
export default Root;