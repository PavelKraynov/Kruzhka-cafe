import React from 'react'
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./header.css";

function Header() {
  const nameMenu =
    { General: "Главная",
    Address : "Адрес",
    Sale :"Скидки",
    Menu :"Меню",
    Translation :"Трансляции"}

  return (
    <div className="header-wrapper">
      <header className="header-wrapper__header header ">
        <Link to="/General  ">
          <img src={logo} alt="icon" width="80px" />
        </Link>

        {Object.keys(nameMenu).map((oneName) => {
          return (
            <Link to={`/${oneName}`} className="header__link" key={oneName}>
              {nameMenu[oneName]}
            </Link>
          );
        })}
      </header>
    </div>
  );
}

export default Header;
