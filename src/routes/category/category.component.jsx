import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";

import { useSelector } from "react-redux/es/hooks/useSelector.js";

import "./category.styles.jsx";
import ProductCard from "../../components/product-card/product-card.component";
import { StyledCategory, StyledCategoryTitle } from "./category.styles.jsx";
import { selectCategoriesMap } from "../../store/categories/category.selector.js";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <StyledCategoryTitle>{category.toUpperCase()}</StyledCategoryTitle>
      <StyledCategory>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </StyledCategory>
    </Fragment>
  );
};

export default Category;
