import React from "react";
import Header from "../header/header";
import HeaderBotton from "../header-botton/header-botton";
import AdressComponent from './adressComponent'

import './adress.css'

function Adress() {
const adressArray = [
  {
    name: "КРУЖКАПАБ БЕЛЯЕВО",
    adress: "Москва, ул.Профсоюзная, д.104 ",
    phone: "+7(499) 940-63-09",
  },
  {
    name: "КРУЖКАПАБ ПРОЛЕТАРСКАЯ ",
    adress: "Москва, 3-й Крутицкий пер.,д.13",
    phone: "+7 (495) 676-05-89",
  },
  {
    name: "КРУЖКАПАБ РЕЧНОЙ ВОКЗАЛ",
    adress: "Москва, ул.Фестивальная, д.13, к.1",
    phone: "+7 (495) 983-01-09",
  },
  {
    name: "КРУЖКАПАБ ВОДНЫЙ СТАДИОН",
    adress: "Москва, ул.Адмирала Макарова, д.45",
    phone: "+7 (495) 452-42-97",
  },
  {
    name: "КРУЖКАПАБ КИЕВСКАЯ",
    adress: "Москва, Бережковская наб., д.8",
    phone: "+7 (499) 240-22-74",
  },
];
  return (
    <div className="adress-wrapper">
      <div className="adress-wrapper-general">
        <div>
          <Header />
        </div>
        {/* <div className="adress-wrapper-general__text"> */}
          <div>
            <h1>АДРЕСА в МОСКВЕ</h1>
          </div>
          <div>
            <AdressComponent
              adressArray={adressArray}
            />
          </div>
        </div>
        <div>
          <HeaderBotton />
        </div>
      </div>
    // </div>
  );
}

export default Adress;
