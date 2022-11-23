import React from "react";
import { CardWrapper } from "./CategoryCard.styles";

const CategoryCard = ({ title, tasks }) => {
  let tasksNum, variant;

  const checkVariant = () => {
    variant = tasks === 1 ? "zadanie" : tasks < 5 ? "zadania" : "zadań";
  };

  const checkNum = () => {
    checkVariant();
    tasksNum = tasks > 9 ? `${tasks} ${variant}` : `0${tasks} ${variant}`;
  };

  checkNum();

  return (
    <CardWrapper>
      <h3>{title}</h3>
      <span>{tasksNum}</span>
    </CardWrapper>
  );
};

export default CategoryCard;
