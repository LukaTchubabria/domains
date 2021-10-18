import React, { useState } from "react";
import "./content.scss";
import DomainsList from "../../Components/DomainsList/DomainsList";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import NotFound from "../../Components/NotFound/NotFoud";
import { domainsList } from "../../data/domainList";


// Filter function

function filter(filterName, filterState, item) {
  switch(filterName){
    case "domainName":
      return item[filterName].length <= filterState.max && item[filterName].length >= filterState.min;
    case "price":
      return item[filterName] <= filterState.max && item[filterName] >= filterState.min;
    case "categories":
      if (!filterState.length) return true;
      return filterState.some(filter => item[filterName][0] === filter);
    case "domainExtension":
      if (!filterState.length) return true;
      return filterState.some(filter => item[filterName] === filter);
    default:
      break;
  }
}

const Content = (props) => {

  // these are the filter states

  let [domainNum, setDomainNum] = useState({
    min: 1,
    max: 26
  })
  let [domainPrice, setDomainPrice] = useState({
    min: 50,
    max: 50000
  })
  let [domainCategory, setDomainCategory] = useState([]);
  let [appExtension, setAppExtension] = useState([]);


  // this is to determine the logical value of the filter

  let filteredDomainsList = domainsList.filter(domn => {
    return (
      filter("domainName", domainNum, domn) &&
      filter("price", domainPrice, domn) &&
      filter("categories", domainCategory, domn) &&
      filter("domainExtension", appExtension, domn)
    );
  });


  return (
    <div className="content__box">
      <div className="content__box--left">
        <p>
          დომენები მარკეტზე: <span>{domainsList.length}</span>
        </p>
        <Filter 
          onClickMenu={props.onClickMenu} 
          style={props.style}
          appExtension={appExtension}
          category={domainCategory}
          num={domainNum}
          price={domainPrice}
          onChange={(newValue) => setAppExtension(newValue)}
          onChangeCategory={(newValue) => setDomainCategory(newValue)}
          onChangeNum={(newValue) => setDomainNum(newValue)}
          onChangePrice={(newValue) => setDomainPrice(newValue)}
        />
      </div>
      <div className="content__box--right">
        <Sort />
        <DomainsList 
          onClickBuy={props.onClickBuy}
          filteredDomainsList={filteredDomainsList}
        />
        <NotFound />
      </div>
    </div>
  );
};

export default Content;
