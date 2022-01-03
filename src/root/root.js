import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from '../App'
import Adress from "../pages/adress/adress";
import Sale from '../pages/sale/sale'
const RootComponent = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/Главная" component={App} />
          <Route exact path="/Адреса" component={Adress} />
          <Route exact path="/Скидки" component={Sale} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}
export default RootComponent()