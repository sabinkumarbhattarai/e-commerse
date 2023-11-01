import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useEffect } from "react";

import { getCategoiesAndDocuments } from "../../utils/firebase/firebase.utils";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { setCaregories } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategorymap = async () => {
      const categoriesArray = await getCategoiesAndDocuments("categories");
      dispatch(setCaregories(categoriesArray));
    };
    getCategorymap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
