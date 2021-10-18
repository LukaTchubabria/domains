import React from 'react'
import './header.scss'

const Header = (props) => {
    
    return (
        <>
            {/* header's first component */}
            <header className="main__header">
                <div className="main__header__cont">
                    <div className="main__header__cont__logo">
                        <button 
                            className="menu-btn"
                            onClick={props.onClick}
                        >
                            <i className="icon-menu"></i>
                        </button>
                        <img src="/Icons/logo.svg" alt="Logo" />
                    </div>
                    <div className="account-setting">
                        <button className="notification">
                            <i className="icon-bell"></i>
                        </button>
                        <button className="cart">
                            <i className="icon-shop"></i>
                            <span>{props.cart}</span>
                        </button>
                        <button className="user">
                            <i className="icon-user"></i>
                        </button>
                        <button className="lang">
                            <img src="/Icons/flag.svg" alt="flag" />
                        </button>
                    </div>
                </div>
            </header>
            {/* header's second component */}
            <div className="nav__header">
            {/* navigation links should be added here */}
              <nav>
                  <ul>
                      <li>დომენი</li>
                      <li>ტრანსფერი</li>
                      <li>ჰოსტინგი</li>
                      <li>Gmail</li>
                      <li>ვებგვერდი</li>
                      <li>დომენის მარკეტი</li>
                  </ul>
                  <ul>
                      <li>ჩვენს შესახებ</li>
                      <li>ფასები</li>
                      <li>ბლოგი</li>
                      <li>დახმარება</li>
                  </ul>
              </nav>
            </div>
        </>
    )
}


export default Header
