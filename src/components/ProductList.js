import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCategories from "./ProductCategories";
import Products from "./Products";

const ProductList = (props) => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const [items, setItems] = useState([]);
  const category = [...new Set(products.map((product) => product.category))];
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    console.log(activeFilters);
    if (activeFilters.length === 0) {
      setItems(products);
    } else {
      const filteredProducts = products.filter((product) =>
        activeFilters.includes(product.category)
      );
      setItems(filteredProducts);
    }
  }, [activeFilters, products]);

  const filterProducts = (event) => {
    const filterValue = event.target.value;
    const filters = [...activeFilters];
    const filterIndex = activeFilters.indexOf(filterValue);
    if (filterIndex === -1) {
      setActiveFilters((prev) => [...prev, event.target.value]);
    } else {
      filters.splice(filterIndex, 1);
      setActiveFilters(filters);
    }
    console.log(activeFilters);
  };

  return (
    <div className="main">
      <div className="category">
        <ProductCategories
          category={category}
          error={error}
          loading={loading}
          handleCategories={filterProducts}
        />
      </div>
      <div className="productlist">
        <Products products={items} error={error} loading={loading} />
      </div>
    </div>
  );
};

export default ProductList;
