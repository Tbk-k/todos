import React from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import { CategoriesWrapper, InnerWrapper } from "./Categories.styles";

const Categories = () => {
  const data = [
    { id: 1, title: "Mobile app", tasks: 10 },
    { id: 2, title: "Website", tasks: 3 },
  ];

  return (
    <CategoriesWrapper>
      <h2>Kategorie</h2>
      <InnerWrapper>
        {data.map(({ id, ...others }) => (
          <CategoryCard key={id} {...others} />
        ))}
      </InnerWrapper>
    </CategoriesWrapper>
  );
};

export default Categories;
