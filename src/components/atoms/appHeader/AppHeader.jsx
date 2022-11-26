import React from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import { StyledHeader } from "./AppHeader.styles";

const AppHeader = () => {
  return (
    <StyledHeader>
      <DiamondIcon />
      <span>Taskoo</span>
    </StyledHeader>
  );
};

export default AppHeader;
