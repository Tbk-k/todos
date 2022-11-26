import React from "react";
import { Outlet } from "react-router-dom";
import IphoneFrame from "../../../assets/img/iphone.png";
import { Wrapper, PhoneImg, TemplateWrapper } from "./MainTemplate.styles";

const MainTemplate = () => {
  return (
    <Wrapper>
      <PhoneImg src={IphoneFrame} alt="" />
      <TemplateWrapper>
        <Outlet />
      </TemplateWrapper>
    </Wrapper>
  );
};

export default MainTemplate;
