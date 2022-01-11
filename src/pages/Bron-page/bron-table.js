import React, { useState } from "react";
import "./bron-table.css";
const BronTable = ({ onClosePortalWindowForm }) => {
  const [telValue, setTelValue] = useState('+7')
  const [personValue, setPersonValue] = useState('');
  const minDate = new Date().toISOString().slice(0, 10);
  const maxDate = new Date(31 * 3600 * 24 * 1000 + +new Date())
    .toISOString()
    .slice(0, 10);
  const valueForPhone = (e) => {
    if (!isNaN(+e.target.value)) {
      setTelValue(e.target.value)
    }
    const sliceTel = +e.target.value.slice(1)
    if (sliceTel === 0) {
      setTelValue("+7");
    }
  }
  const valueForPerson = (e) => {
    if (!isNaN(+e.target.value)) {
     return setPersonValue(e.target.value);
    }
  }
  // onChange={(e) => setTelValue(e.target.value)}
  return (
    <div className="Bron-table-wrapper__portal">
      <div className="Bron-table-wrapper__portal-form">
        <h3>Бесплатное бронирование</h3>
        <div className="Bron-table-wrapper__bron-text">
          Бронь принимается не менее, чем за 3 часа до посещения заведения.
        </div>
        <div className="Bron-table-wrapper__portal-form-input input buttons">
          Адрес бара из списка*{" "}
          <select className="input__line" required="required">
            <option value="">Выберите Бар</option>
            <option value="1">
              КРУЖКАПАБ БЕЛЯЕВО Москва, ул.Профсоюзная, д.104
            </option>
            <option value="2">
              КРУЖКАПАБ ПРОЛЕТАРСКАЯ Москва, 3-й Крутицкий пер.,д.13
            </option>
            <option value="3">
              КРУЖКАПАБ РЕЧНОЙ ВОКЗАЛ Москва, ул.Фестивальная, д.13, к.1
            </option>
            <option value="4">
              КРУЖКАПАБ ВОДНЫЙ СТАДИОН Москва, ул.Адмирала Макарова, д.45
            </option>
            <option value="5">
              КРУЖКАПАБ КИЕВСКАЯ Москва, Бережковская наб., д.8
            </option>
          </select>
          Имя*{" "}
          <input
            className="input__line"
            placeholder="ваше имя"
            required="required"
          />
          Время*{" "}
          <input
            className="input__line"
            placeholder="желаемое время (пример: 18:00)"
          />
          Дата*{" "}
          <input
            className="input__line"
            placeholder="введите дату дд/мм/гг"
            type="date"
            name="trip-start"
            // value="2022-07-22"
            min={minDate}
            max={maxDate}
          />
          Количество человек*
          <input
            value={personValue}
            onChange={valueForPerson}
            className="input__line"
            placeholder="введите число"
          />
          Телефон*{" "}
          <input
            className="input__line"
            placeholder="телефон для связи"
            type="tel"
            maxlength="17"
            required
            value={telValue}
            onChange={valueForPhone}
          ></input>
          Эл. почта
          <input
            type="email"
            className="input__line"
            placeholder="@mail"
            pattern=".+@globex\.com"
          />
          Комментарии
          <textarea className="input__line-comment" placeholder="коментарий" />
          <div className="Bron-table-wrapper__buttons buttons">
            <button className="buttons__send" type="button">
              отправить
            </button>
            <button
              className="buttons__cancel"
              type="button"
              onClick={() => onClosePortalWindowForm()}
            >
              ❌
            </button>
          </div>
        </div>
        <div className="Bron-table-wrapper__nesessary-line">
          * - обязательные поля
        </div>
      </div>
    </div>
  );
};

export default BronTable;
