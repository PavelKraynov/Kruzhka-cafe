import React from "react";
import Header from "../header/header";
import HeaderBotton from "../header-bottom/header-bottom";
import saleSkin from "./sale.png";

import { Tablet } from '../../styles/responsive'
import "./sale.css";

function Sale() {

  return (
    <div className="sale-wrapper">
        <Header />
      <div className="sale-wrapper-general">
        <h1>ПРАЗДНУЙ ДЕНЬ РОЖДЕНИЯ У НАС!</h1>
        <div className="sale-wrapper-general__img img">
          <img className="img__birthday" src={saleSkin} alt="sale" />
        </div>
        <div>
          Скидка 10% действительна в день рождения 10% в течение 5 дней после
          дня рождения.
        </div>
      </div>
        <HeaderBotton />
    </div>
  );
}

export default Sale;
