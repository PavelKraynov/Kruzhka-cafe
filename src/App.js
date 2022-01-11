import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import "./App.css";

import HeaderBotton from "./pages/header-bottom/header-bottom";
import Header from "./pages/header/header";
import BronTable from "./pages/Bron-page/bron-table";

function App() {
  const [toggled, setToggled] = useState(false);
  const onClick = () => {
    setToggled(!toggled);
  };
  const portalElement = document.querySelector("#portal");
  return (
    <div className="App-wrapper">
      <div>
        <div>
          <Header />
        </div>
        <div className="App-wrapper__general-text">
          <div>
            <h1>О НАС</h1>
          </div>
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
        <div className="App-wrapper__links-forms">
          <div onClick={onClick} className="App-wrapper__link-form">
            <Link className="App-wrapper__link-style" to="">
              Забронировать
            </Link>
          </div>
          <div onClick={onClick} className="App-wrapper__link-form">
            <Link className="App-wrapper__link-style" to="/Menu">
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
        <div>
          <HeaderBotton />
        </div>
      </div>
    </div>
  );
}

export default App;
