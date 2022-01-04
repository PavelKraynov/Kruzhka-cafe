import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes, useRoutes } from "react-router-dom";

import App from '../App'
import Adress from "../pages/adress/adress";
import Sale from '../pages/sale/sale'
import Menu from '../pages/menu/menu'
import Translation from '../pages/translation/translation'
// const RootComponent = () => {
//   const routes = useRoutes([
//  { path:"/", element:<App />} ,
//           { path:"Главная", element:<App /> },
//           { path:"Адреса", element:<Adress /> },
//           { path:"Скидки", element:<Sale /> },
//           { path:"Меню", element:<Menu /> },
//           { path:"Трансляции", element:<Translation /> }
//   ])
//   return routes;
// }

const Root = () => {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Адреса" element={<Adress />} />
      </Routes>
  );
};
export default Root();