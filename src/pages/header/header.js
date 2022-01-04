import React from 'react'
import { Link } from "react-router-dom";
import logo from './logo.png'
import "./header.css";

function Header() {
  const nameMenu = ["Главная", "Адреса", "Скидки", "Меню", "Трансляции"];
  return (
    <div className="header-wrapper">
      <header className="header-wrapper__header header">
        <a href="/Главная">
          <img src={logo} alt="icon" width="80px" />
        </a>

        {nameMenu.map((oneName) => {
          return (
            <Link to={oneName} className="header__link" key={oneName}>
              {oneName}
            </Link>
          );
        })}
      </header>
    </div>
  );
}

export default Header;
