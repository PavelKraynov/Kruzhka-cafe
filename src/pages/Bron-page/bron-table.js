import React from "react";
import "./bron-table.css";
const BronTable = ({ onClosePortalWindowForm }) => {
  return (
    <div className="Bron-table-wrapper__portal">
      <div className="Bron-table-wrapper__portal-form">
        <h3>Бесплатное бронирование</h3>
        <div className="Bron-table-wrapper__bron-text">
          Бронь принимается не менее, чем за 3 часа до посещения заведения.
        </div>
        <div className="Bron-table-wrapper__portal-form-input input buttons">
          Имя <input className="input__line" placeholder="ваше имя" />
          Время <input className="input__line" placeholder="желаемое время" />
          Дата <input className="input__line" placeholder="введите число" />
          Количество человек
          <input className="input__line" placeholder="введите число" />
          Телефон{" "}
          <input className="input__line" placeholder="телефон для связи" />
          Эл. почта{" "}
          <input className="input__line" placeholder="телефон для связи" />
          Комментарии
          <textarea
            className="input__line-comment"
            placeholder="телефон для связи"
          />
          <div className="buttons">
            <button type="button">отправить</button>{" "}
            <button type="button" onClick={() => onClosePortalWindowForm()}>
              ❌
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BronTable;
