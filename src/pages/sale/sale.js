import React from "react";
import Header from "../header/header";
import HeaderBotton from "../header-botton/header-botton";
import saleSkin from "./sale.png";

import "./sale.css";

function Sale() {
  return (
    <div className="sale-wrapper">
      <div className="sale-wrapper-general">
        <div>
          <Header />
        </div>
        <div>
          <h1>ПРАЗДНУЙ ДЕНЬ РОЖДЕНИЯ У НАС!</h1>
        </div>
        <div className="sale-wrapper-general__img img">
          <img
            className="img__birthday"
            src={saleSkin}
            alt="sale"
          />
        </div>
        <div>
          Скидка 10% действительна в день рождения 10% в течение 5 дней после
          дня рождения.
        </div>
      </div>
      <div>
        <HeaderBotton />
      </div>
    </div>
    // </div>
  );
}

export default Sale;
