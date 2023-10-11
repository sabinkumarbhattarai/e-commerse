import { createContext, useState, useEffect } from "react";

import { getCategoiesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});

  useEffect(() => {
    const getCategorymap = async () => {
      const categorMap = await getCategoiesAndDocuments();
      console.log(categorMap);
      setcategoriesMap(categorMap )
    };
    getCategorymap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
