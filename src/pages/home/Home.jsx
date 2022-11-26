import React from "react";
import AppHeader from "../../components/atoms/appHeader/AppHeader";
import { HomeContent, ImgWrapper, Wrapper } from "./Home.styles";
import HomeImg from "../../assets/img/homeImg.png";
import Btn from "../../components/atoms/btn/Btn";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/login");
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Athiti:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <AppHeader />
      <Wrapper>
        <h1>
          Zarządzaj swoimi <br /> zadaniami & czasem <br /> z{" "}
          <span>taskoo</span>
        </h1>
        <ImgWrapper>
          <img src={HomeImg} alt="" />
        </ImgWrapper>
        <HomeContent>
          <p>
            Kiedy jesteś przytłoczony ilością pracy, którą masz na głowie,
            zatrzymaj się i przemyśl to jeszcze raz.
          </p>
          <Btn width="65%" label="zaczynamy" onClick={clickHandler} />
        </HomeContent>
      </Wrapper>
    </>
  );
};

export default Home;
