import React, { useState } from "react";
import "./header.scss";
import Cart from "../../Components/Cart/Cart";
import { NavLink, Link } from "react-router-dom";

const Header = (props) => {
  // if cart is open
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      {/* header's first component */}
      <header className="main__header">
        <div className="main__header__cont">
          <div className="main__header__cont__logo">
            <button className="menu-btn" onClick={props.onClick}>
              <i className="icon-menu"></i>
            </button>
            <Link to='/'>
                <img src="/Icons/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="account-setting">
            <button className="notification">
              <i className="icon-bell"></i>
            </button>
            <button className="cartBtn" onClick={() => setOpenCart(!openCart)}>
              <i className="icon-shop"></i>
              <span>{props.addCart}</span>
            </button>
            <button className="user">
              <i className="icon-user"></i>
              <p>Kancha Co.</p>
              <i className="icon-arrow"></i>
            </button>
            <button className="lang">
              <img src="/Icons/flag.svg" alt="flag" />
            </button>
          </div>
        </div>
        <Cart cartList={props.cartList} openCart={openCart} />
      </header>
      {/* header's second component */}
      <div className="nav__header">
        {/* navigation links should be added here */}
          <nav>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">დომენი</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/transfer">ტრანსფერი</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/hosting">ჰოსტინგი</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/gmail">Gmail</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/webpage">ვებგვერდი</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/domainmarket">დომენის მარკეტი</NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink activeClassName="active" to="/aboutus">ჩვენს შესახებ</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/prices">ფასები</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/blog">ბლოგი</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/help">დახმარება</NavLink>
              </li>
            </ul>
          </nav>
      </div>
    </>
  );
};

export default Header;
