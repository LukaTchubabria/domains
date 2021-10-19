import React, { useState } from "react";
import Header from "./Layout/Header/Header";
import Content from "./Layout/Content/Content";
import './app.scss'

function App() {
  // this is the menu burger state
  const [menu, setMenu] = useState(false);

  // this is cart counter state
  let [buy, setBuy] = useState(0);

  // this is cart object state
  let [cart, setCart] = useState([]);

  return (
    <div className="app">
      <Header 
        onClick={() => setMenu(!menu)}
        addCart={buy}
        cartList={cart}
      />
      <Content
        onClickMenu={() => setMenu(!menu)}
        onClickBuy={() => setBuy(buy += 1)}
        style={menu}
        cart={cart}
        setCart={(n) => setCart(n)}
      />
    </div>
  );
}

export default App;
