import React from 'react'
// import { Link } from "react-router-dom";
import logo from './logo.png'
import "./header.css";
function Header() {
  const nameMenu = ["Главная", "Адреса", "Скидки", "Меню", "Трансляции"];
  return (
    <div className="header-wrapper">
      <header className="header-wrapper__header header">
        <img src={logo} alt="icon" srcset="logo.png 2x" />
        {nameMenu.map((oneName) => {
          return (
            <a href={oneName} className="header__link" key={oneName}>
              {oneName}
            </a>
          );
        })}
      </header>
    </div>
  );
}

export default Header;
