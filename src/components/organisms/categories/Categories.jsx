import React, { useEffect, useState } from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import { CategoriesWrapper, InnerWrapper } from "./Categories.styles";
import axios from "axios";

const Categories = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.post("http://localhost:3005/api/auth/register", {
          email: "test@gmail",
          password: "test",
        });
      } catch (err) {
        console.log(err);
      }
      fetchData()
    };
  }, []);

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
