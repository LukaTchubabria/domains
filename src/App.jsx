import React, { useState } from "react";
import './app.scss'
import Header from "./Layout/Header/Header";
import Home from "./pages/Home/Home";
import Transfer from "./pages/Transfer/Transfer";
import Hosting from "./pages/Hosting/Hosting";
import Gmail from './pages/Gmail/Gmail';
import WebPage from './pages/WebPage/WebPage';
import DomainMarket from "./pages/DomainMarket/DomainMarket";
import AboutUs from './pages/AboutUs/AboutUs';
import Prices from './pages/Prices/Prices';
import Blog from "./pages/Blog/Blog";
import Help from './pages/Help/Help';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // this is the menu burger state
  const [menu, setMenu] = useState(false);

  // this is cart counter state
  let [buy, setBuy] = useState(0);

  // this is cart object state
  let [cart, setCart] = useState([]);

  return (
    <div className="app">
      <Router>
        <Header 
          onClick={() => setMenu(!menu)}
          addCart={buy}
          cartList={cart}
        />
        <Switch>
          <Route path='/transfer'>
            <Transfer />
          </Route>
          <Route path='/hosting'>
            <Hosting />
          </Route>
          <Route path='/gmail'>
            <Gmail />
          </Route>
          <Route path='/webpage'>
            <WebPage />
          </Route>
          <Route path='/domainmarket'>
            <DomainMarket />
          </Route>
          <Route path='/aboutus'>
            <AboutUs />
          </Route>
          <Route path='/Prices'>
            <Prices />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/help'>
            <Help />
          </Route>
          <Route path='/'>
            <Home
              onClickMenu={() => setMenu(!menu)}
              onClickBuy={() => setBuy(buy += 1)}
              style={menu}
              cart={cart}
              setCart={(n) => setCart(n)}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
