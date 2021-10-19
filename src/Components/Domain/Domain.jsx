import React, { useState } from "react";
import "./domain.scss";

const Domen = (props) => {
  const [toggle, setToggle] = useState(false);

  const addCart = () => props.cart.some(e=>e.domainName===props.domainName);

  return (
    <div
      className={"domain__item " + (!addCart() ? (toggle ? " active--bg" : "") : null)}
      onClick={() => setToggle(!toggle)}
    >
      <div className="domain__item--left">
        <button
          className={!addCart() ? (toggle ? " active" : "") : null}
          onClick={() => setToggle(!toggle)}
        >
          <i className="icon-arrow"></i>
        </button>
        <p>
          {props.domainName}
          {props.nameSuffix}
        </p>
      </div>
      <div className="domain__item--right">
        <div className="domain__item--right__price">
          <p>{props.price}₾</p>
          <p>{props.price * 0.32}$</p>
        </div>
        <button
          onClick={() => {
            props.onClickBuy();
            props.onClickCart([...props.cart, props.item]);
          }}
          disabled={addCart()}
          di={props.domainName}
        >
          {addCart() ? (
            <>
              <i className="icon-check">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>{" "}
              კალათშია
            </>
          ) : toggle ? (
            <>
              დამატება <i className="icon-shop"></i>
            </>
          ) : (
            <i className="icon-shop"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Domen;
