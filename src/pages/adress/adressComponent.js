import React from "react";
import "./adress-component.css"

function AdressComponent(props) {
  console.log(props.adressArray);
  return (
    <div className="wrapper-adress-components adress">
      {props.adressArray.map((it) => {
        return (
          <div className="adress__component" key={it.phone}>
            <div className="adress__component-name"> {it.name}</div>
            <div> {it.adress}</div>
            <div> {it.phone}</div>
          </div>
        );
      })}
    </div>
  );
}

export default AdressComponent;
