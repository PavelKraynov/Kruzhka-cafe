import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";
import HeaderBotton from "../header-bottom/header-bottom";
import generalMenu from './pdf/menu.pdf'
import barMenu from './pdf/bar-menu.pdf'
import craftPivo from './pdf/craft-pivo.pdf'

import "./menu.css";

function Sale() {
  return (
    <div className="menu-wrapper">
          <Header />
      <div className="menu-wrapper-general">
        <div className="menu-wrapper-general__text button">
          <h1>Меню</h1>
          <div className="button__style link">
            <Link className="link__style" to={generalMenu} target="_blank">
              Ocновное меню
            </Link>
          </div>
          <div className="button__style">
            <Link className="link__style" to={barMenu} target="_blank">
              Барное меню
            </Link>
          </div>
          <div className="button__style">
            <Link className="link__style" to={craftPivo} target="_blank">
              Крафтовое пиво
            </Link>
          </div>
        </div>
      </div>
        <HeaderBotton />
    </div>
  );
}

export default Sale;
