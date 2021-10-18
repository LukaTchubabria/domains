import React from "react";
import "./filter.scss";
import { categories, domainsList } from "../../data/domainList";
import { Slider, InputNumber } from "antd";
import "antd/dist/antd.css";


const appdomainExtension = [...new Set(domainsList.map(d => d.domainExtension))];


const Filter = (props) => {


  // Price filter
    
  const onChangePrice = (value) => {
    if (value[0] < value[1]) {
      props.onChangePrice({ min: value[0], max: value[1] });
    }
  }

  
  const onChangeMin = (value) => {
    if (props.price.max > value) {
      props.onChangePrice({...props.price, min: value });
    }
  }

  
  const onChangeMax = (value) => {
    if (props.price.min < value) {
      props.onChangePrice({...props.price, max: value });
      // 
    }
  }



  
  // Domain name Lenght

  const onChangeSymbol = (value) => {
    if (value[0] < value[1]) {
      props.onChangeNum({ min: value[0], max: value[1] });
    }
  }
  const onChangeMinSymbol = (value) => {
    if (props.num.max > value) {
      props.onChangeNum({...props.num, min: value });
    }
  }

  const onChangeMaxSymbol = (value) => {
    if (props.num.min < value) {
      props.onChangeNum({...props.num, max: value });
    }
  }

  return (
    <div style={props.style ? {left: '0'} : {left: '-100%'}} className="filter">
      <div className="filter--mb__header">
        <h3>ფილტრი</h3>
        <button
          onClick={props.onClickMenu}
        >
          <i className="icon-cancel"></i>
        </button>
      </div>
      <div className="filter__box">
        <div>
          <input 
            className="filter__box__search" 
            type="text" 
            placeholder="სახელით ძიება"
          />
        </div>
        <div>
          <h4>ფასი</h4>
          <div className="price-filt-inputs">
            <InputNumber
              className="min-input-main"
              min={0}
              max={50000}
              value={props.price.min}
              onChange={onChangeMin}
            />
            <InputNumber
              className="min-input-main"
              min={0}
              max={50000}
              value={props.price.max}
              onChange={onChangeMax}
            />
          </div>
          <Slider
            className="slider-main-div"
            min={0}
            max={50000}
            onChange={onChangePrice}
            range={true}
            defaultValue={[props.price.min, props.price.max]}
            value={[props.price.min, props.price.max]}
          />
        </div>
        <div className="symbol-filt">
          <h4>სიმბოლოების რაოდენობა</h4>
          <div className="range-input-number-main">
            <div className="price-filt-inputs">
              <InputNumber
                className="min-input-main"
                min={1}
                max={26}
                value={props.num.min}
                onChange={onChangeMinSymbol}
              />
              <InputNumber
                className="min-input-main"
                min={1}
                max={26}
                value={props.num.max}
                onChange={onChangeMaxSymbol}
              />
            </div>
          </div>
          <Slider
            className="slider-main-div"
            min={1}
            max={26}
            onChange={onChangeSymbol}
            range={true}
            defaultValue={[props.num.min, props.num.max]}
            value={[props.num.min, props.num.max]}
          />
        </div>
        <div className="categ-filt">
          <h4>კატეგორიები</h4>
          <div className="categ-filt--dsgn">
            {categories.map((category) => (
              <label key={category.id.toString()} className="checkbox--prett">
                {category.name}
                <input 
                  type="checkbox"
                  onChange={e => {
                    if (e.target.checked) {
                      props.onChangeCategory([...props.category, category.id]);
                    } else {
                      props.onChangeCategory(props.category.filter(a => a!== category.id));
                    }
                  }}
                />
                <span className="checkmark"></span>
              </label>
            ))}
          </div>
        </div>
        <div className="domain-filt">
          <h4>დომენის ზონა</h4>
          <div className="domain-filt--dsgn">
            {appdomainExtension.map((extension, id) => (
              <label key={id} className="checkbox--prett">
                {extension}
                <input 
                  type="checkbox"
                  onChange={e => {
                    if (e.target.checked) {
                      props.onChange([...props.appExtension, extension]);
                    } else {
                      props.onChange(props.appExtension.filter(domainExtens => domainExtens !== extension));
                    }
                  }}
                />
                <span className="checkmark"></span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="search-btn">
        <button>ძიება</button>
      </div>
    </div>
  );
};

export default Filter;
