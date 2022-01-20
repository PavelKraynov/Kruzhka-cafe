import React from "react";
import Header from "../header/header";
import HeaderBotton from "../header-bottom/header-bottom";

import "./translation.css";

function Translation() {
  return (
    <div className="translation-wrapper">
          <Header />

        <div className="translation-wrapper-general__text href">
          <div>
            <h2>ТРАНСЛЯЦИИ</h2>
          </div>
          <div>
            Сеть КРУЖКАПАБ показывает спортивные матчи транслируемые,
            телеканалами МАТЧ и МАТЧ ПРЕМЬЕР.
            <div className="href__style-div">
              <a
                className="href__style-link"
                href="https://matchtv.ru/live"
                target="_blank"
                rel="noopener noreferrer"
              >
                Расписание трансляций.
              </a>
            </div>
            По любым вопросам вы можете обратиться в интересующий вас бар.
          </div>

      </div>
        <HeaderBotton />
 </div>
  );
}

export default Translation;
