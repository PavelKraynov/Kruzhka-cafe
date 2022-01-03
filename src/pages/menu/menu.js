import React from "react";
import Header from "../header/header";
import HeaderBotton from "../header-bottom/header-bottom";

import "./menu.css";

function Sale() {
  return (
    <div className="menu-wrapper">
      <div className="menu-wrapper-general">
        <div>
          <Header />
        </div>
        <div className="menu-wrapper-general__text button">
          <h1>Меню</h1>
          <div>
            <button className="button__style" type="button">
              Ocновное меню
            </button>
          </div>
          <div>
            <button className="button__style" type="button">
              Барное меню
            </button>
          </div>
          <div>
            <button className="button__style" type="button">
              Крафтовое пиво
            </button>
          </div>
        </div>
      </div>
      <div>
        <HeaderBotton />
      </div>
    </div>
  );
}

export default Sale;
