import React from "react";
import Header from "../header/header";
import HeaderBotton from "../header-bottom/header-bottom";

import "./translation.css";

function Translation() {
  return (
    <div className="translation-wrapper">
      <div className="translation-wrapper-general">
        <div>
          <Header />
        </div>
        <div className="translation-wrapper-general__text href">
          <div>
            <h1>ТРАНСЛЯЦИИ</h1>
          </div>
          <div>
            Сеть КРУЖКАПАБ показывает спортивные матчи транслируемые,
            телеканалами МАТЧ и МАТЧ ПРЕМЬЕР.
            <div className="href__style-div">
              <a className="href__style-link" href="https://matchtv.ru/live">
                Расписание трансляций.
              </a>
            </div>
            По любым вопросам вы можете обратиться в интересующий вас бар.
          </div>
        </div>
      </div>
      <div>
        <HeaderBotton />
      </div>
    </div>
    // </div>
  );
}

export default Translation;
