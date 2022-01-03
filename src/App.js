import React from "react";
import Header from "./pages/header/header";
import HeaderBotton from "./pages/header-bottom/header-bottom";

import "./App.css";
function App() {
  return (
    <div className="App-wrapper">
      <div className="App-wrapper__general">
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
          <div>
            <HeaderBotton />
          </div>
      </div>
    </div>
  );
}

export default App;
