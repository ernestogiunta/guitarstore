import React from "react";

import dummyProductImg from "../assets/images/product_dummy.svg";

const Product = (props) => {
  const { product } = props;

  if (product == null) {
    return (
      <div className="card-body">
        <p style={{ textAlign: "center" }}>
          <i className="fas fa-circle-notch fa-spin"></i>
        </p>
      </div>
    );
  }
  return (
    <div className="card-body">
      <h2>{product.name}</h2>
      <div className="text-center">
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: "25rem" }}
          src={`http://localhost:3001/img/products/${product.img}`}
          alt="image dummy"
        />
      </div>
      <p>{product.description} </p>
    </div>
  );
};

export default Product;
