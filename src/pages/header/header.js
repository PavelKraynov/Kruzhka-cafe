import React from 'react'
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const nameMenu = ["General", "Adres", "Sale", "Menu", "Live"];
  return (
    <div className="header-wrapper">
      <header className="header-wrapper__header header">
        {nameMenu.map((oneName) => {
          return <Link key={oneName}>{oneName}</Link>;
        })}
      </header>
    </div>
  );
}

export default Header;
