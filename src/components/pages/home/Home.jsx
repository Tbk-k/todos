import React from "react";
import {
  BtnWrapper,
  HomeContent,
  HomeHeader,
  ImgWrapper,
  StyledParagraph,
} from "./Home.styles";
import DiamondIcon from "@mui/icons-material/Diamond";
import HomeImg from "../../../assets/img/homeImg.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Athiti:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <HomeHeader>
        <DiamondIcon />
        <span>Taskoo</span>
      </HomeHeader>
      <HomeContent>
        <h1>
          Zarządzaj swoimi <br /> zadaniami & czasem <br /> z{" "}
          <span>taskoo</span>
        </h1>
        <ImgWrapper>
          <img src={HomeImg} alt="" />
        </ImgWrapper>
        <StyledParagraph>
          Kiedy jesteś przytłoczony ilością pracy, którą masz na głowie,
          zatrzymaj się i przemyśl to jeszcze raz.``
        </StyledParagraph>
        <BtnWrapper>
          <Link to="profil"> Zaczunamy</Link>
        </BtnWrapper>
      </HomeContent>
    </>
  );
};

export default Home;
