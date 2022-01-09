import React from "react";
import "./address-component.css"

function AddressComponent(props) {
  console.log(props.addressArray);
  return (
    <div className="wrapper-address-components adress">
      {props.addressArray.map((it) => {
        return (
          <div className="address__component" key={it.phone}>
            <div className="address__component-name"> {it.name}</div>
            <div> {it.adress}</div>
            <div> {it.phone}</div>
          </div>
        );
      })}
    </div>
  );
}

export default AddressComponent;
