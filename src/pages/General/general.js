import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import "./general.css";

import HeaderBotton from "../header-bottom/header-bottom";
import Header from "../header/header";
import BronTable from "../Bron-page/bron-table";

function General() {
  const [toggled, setToggled] = useState(false);
  const onClick = () => {
    setToggled(!toggled);
  };
  const portalElement = document.querySelector("#portal");
  return (
    <div className="general-wrapper">

        <Header />
        <div className="general-wrapper__general-text">
          <h1>О НАС</h1>
          <div>
            Сеть баров в разных районах Москвы, где каждый день можно посмотреть
            спортивные трансляции на больших экранах, заказать бокал пенного и
            попробовать популярные блюда нашего меню. Интерьер в духе
            классического паба располагает к душевному общению с друзьями и
            близкими. В меню много всего интересного: колбаски, гренки, соленья,
            морепродукты, шашлыки, салаты и супы. КРУЖКАПАБ радует своих гостей
            особой атмосферой, большим ассортиментом напитков, а также
            разнообразными и вкусными закусками.
          </div>
        </div>
        <div className="general-wrapper__links-forms">
          <div onClick={onClick} className="general-wrapper__link-form">
            <Link className="general-wrapper__link-style" to="">
              Забронировать
            </Link>
          </div>
          <div onClick={onClick} className="general-wrapper__link-form">
            <Link className="general-wrapper__link-style" to="/Menu">
              Меню
            </Link>
          </div>
          <div>
            {toggled &&
              createPortal(
                <BronTable onClosePortalWindowForm={() => setToggled(false)} />,
                portalElement
              )}
          </div>
        </div>
          <HeaderBotton />
      </div>

  );
}

export default General;
