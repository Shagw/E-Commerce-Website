import React from "react";

const Products = (props) => {
  const { products, error, loading } = props;

  return loading ? (
    <div>Loading....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className="products">
      {products.map((product) => (
        <li key={product.productId}>
          <div className="product">
            <img
              className="products-image"
              src={product.searchImage}
              alt="Product"
            />
            <div className="products-name">{product.productName}</div>
            <div className="products-brand">{product.brand}</div>
            <div className="products-price">
              <div>Rs.{product.price}</div>{" "}
              <div className="product-totalprice">
                Rs.{product.price + product.discount}
              </div>
              <div className="product-price-discount">
                {" "}
                Save Rs.{product.discount}
              </div>
            </div>
            <div className="products-rating">
              {product.rating === 0 ? (
                <div>No reviews</div>
              ) : (
                <div>
                  {product.rating.toFixed(1)} out of 5 starts (
                  {product.ratingCount} Reviews)
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Products;
