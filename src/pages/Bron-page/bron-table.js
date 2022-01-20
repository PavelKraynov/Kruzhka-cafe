import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPersonForm } from "../../redux/reducers/form_reducer";

import "./bron-table.css";

const BronTable = ({ onClosePortalWindowForm }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [telephone, setTelephone] = useState("+7");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [mail, setMail] = useState("");
  const [comments, setComments] = useState("");

  const [errOfEmpty, setErrOfEmpty] = useState("");
  //---------input_name------
  const onChangeName = (e) => {
    return setName(e.target.value);
  };

  //---------input_time------
  const onChangeTime = (e) => {
    return setTime(e.target.value);
  };
  //---------input_telephone------
  const onChangeTelephone = (e) => {
    if (!isNaN(+e.target.value)) {
      setTelephone(e.target.value);
    }
    const sliceTel = +e.target.value.slice(1);
    if (sliceTel === 0) {
      setTelephone("+7");
    }
  };

  //---------input_date------

  //---------input_numberOfPeople------
  const onChangeNumberOfPeople = (e) => {
    if (!isNaN(+e.target.value)) {
      return setNumberOfPeople(e.target.value);
    }
  };

  //---------input_mail------
  const onChangeMail = (e) => {
    return setMail(e.target.value);
  };

  const onChangeComments = (e) => {
    return setComments(e.target.value);
  };

  const onClickToSendForm = () => {
    if (name.length > 0 && telephone.length > 9) {
      dispatch(
        addPersonForm(name, time, telephone, numberOfPeople, mail, comments),
        onClosePortalWindowForm()
      );
    } if (name.length < 1) {
      setErrOfEmpty('Введите имя')
      }
      if (telephone.length < 9) {
        setErrOfEmpty("Некорректен номер телефона");
      }
  };

  const minDate = new Date().toISOString().slice(0, 10);
  const maxDate = new Date(31 * 3600 * 24 * 1000 + +new Date())
    .toISOString()
    .slice(0, 10);

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
          <select className="input__line">
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
            onChange={onChangeName}
            className="input__line"
            placeholder="ваше имя"
          />
          Время{" "}
          <input
            onChange={onChangeTime}
            className="input__line"
            placeholder="желаемое время (пример: 18:00)"
          />
          Дата{" "}
          <input
            className="input__line"
            placeholder="введите дату дд/мм/гг"
            type="date"
            name="trip-start"
            min={minDate}
            max={maxDate}
          />
          Количество человек
          <input
            value={numberOfPeople}
            onChange={onChangeNumberOfPeople}
            value={numberOfPeople}
            className="input__line"
            placeholder="введите число"
          />
          Телефон*{" "}
          <input
            className="input__line"
            placeholder="телефон для связи"
            type="tel"
            // maxlength="17"
            required
            value={telephone}
            onChange={onChangeTelephone}
          ></input>
          Эл. почта
          <input
            type="email"
            className="input__line"
            value={mail}
            onChange={onChangeMail}
            placeholder="@mail"
            pattern=".+@globex\.com"
          />
          Комментарии
          <textarea
            onChange={onChangeComments}
            value={comments}
            className="input__line-comment"
            placeholder="коментарий"
          />
          <div className="Bron-table-wrapper__buttons buttons">
            <button
              onClick={onClickToSendForm}
              className="buttons__send"
              type="button"
            >
              отправить
            </button>
            <button
              className="buttons__cancel"
              type="button"
              onClick={onClosePortalWindowForm}
            >
              ❌
            </button>
          </div>
        </div>
        <div className="Bron-table-wrapper__nesessary-line span">
          * - обязательные поля <br/>
        <span className="span__error">{errOfEmpty}</span>
        </div>
      </div>
    </div>
  );
};

export default BronTable;
