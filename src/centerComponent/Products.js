import React from "react";
import imgg2 from "./images/img2.png";

function Products() {
  return (
    <div className="container center-product">
      <h2 className="product-top-title">Плохожие продукты</h2>
      <div className="main-product">
        <div className="product-card">
          <div className="product-img">
            <img src={imgg2} alt="img2" />
          </div>
          <p className="product-num">Бляз- 001</p>
          <div className="product-bottom">
            <button className="product-button-left">$1.3</button>
            <button className="product-button-right">Заказать</button>
          </div>
        </div>
        <div className="product-card">
          <div className="product-img">
            <img src={imgg2} alt="img2" />
          </div>
          <p className="product-num">Бляз- 001</p>
          <div className="product-bottom">
            <button className="product-button-left">$1.3</button>
            <button className="product-button-right">Заказать</button>
          </div>
        </div>
        <div className="product-card">
          <div className="product-img">
            <img src={imgg2} alt="img2" />
          </div>
          <p className="product-num">Бляз- 001</p>
          <div className="product-bottom">
            <button className="product-button-left">$1.3</button>
            <button className="product-button-right">Заказать</button>
          </div>
        </div>
        <div className="product-card">
          <div className="product-img">
            <img src={imgg2} alt="img2" />
          </div>
          <p className="product-num">Бляз- 001</p>
          <div className="product-bottom">
            <button className="product-button-left">$1.3</button>
            <button className="product-button-right">Заказать</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
