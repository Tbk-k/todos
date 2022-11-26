import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 25px;
  right: 50%;
  transform: translateX(50%);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.orange};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-box-shadow: 0px 14px 19px -13px #ff7260;
  -moz-box-shadow: 0px 14px 19px -13px #ff7260;
  box-shadow: 0px 14px 19px -13px #ff7260;
  svg {
    font-size: 18px;
    cursor: pointer;
  }
`;

const CreateNew = () => {
  return (
    <StyledLink to="/create">
      <AddIcon />
    </StyledLink>
  );
};

export default CreateNew;
