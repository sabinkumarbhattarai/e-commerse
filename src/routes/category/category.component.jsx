import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import "./category.styles.jsx";
import { useContext, useState, useEffect, Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { StyledCategory, StyledCategoryTitle } from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
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
