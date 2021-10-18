import React, { useState } from "react";
import Header from "./Layout/Header/Header";
import Banner from "./Layout/Banner/Banner"
import Content from "./Layout/Content/Content";
import './app.scss'

function App() {
  // this is the menu burger state
  const [menu, setMenu] = useState(false);

  // this is cart counter state
  let [buy, setBuy] = useState(0);

  return (
    <div className="app">
      <Header 
        onClick={() => setMenu(!menu)}
        cart={buy}
      />
      <Banner />
      <Content
        onClickMenu={() => setMenu(!menu)}
        onClickBuy={() => setBuy(buy += 1)}
        style={menu}
      />
    </div>
  );
}

export default App;
