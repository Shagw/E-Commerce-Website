import React from "react";

/**
 * @author
 * @function ProductCategories
 **/

const ProductCategories = (props) => {
  const { category, handleCategories } = props;
  return (
    <div>
      <h3 style={{ padding: "15px", fontSize: "20px", paddingBottom: "0px" }}>
        Categories
      </h3>
      <ul className="categories">
        {category.map((categories, index) => (
          <li key={index}>
            <input
              type="checkbox"
              name={categories}
              id={categories}
              style={{ marginRight: "10px" }}
              value={categories}
              onChange={handleCategories}
            />
            <label htmlFor={categories} style={{ fontSize: "0.8rem" }}>
              {categories}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategories;
