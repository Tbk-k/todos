import React from "react";
import {
  CategoriesWrapper,
  ProfileHeader,
  ProfileImg,
  ProfileSection,
  SearchForm,
  SearchWrapper,
} from "./Profile.styles";
import ProfilImg from "../../../assets/img/head.png";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import Categories from "../../organisms/categories/Categories";
import OngoingTask from "../../organisms/ongoingTask/OngoingTask";

const Profile = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Athiti:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <ProfileSection>
        <ProfileHeader>
          <div>
            <p>Cześć, Jan</p>
            <span>5 zadań rozpoczętych</span>
          </div>
          <ProfileImg>
            <img src={ProfilImg} alt="" />
          </ProfileImg>
        </ProfileHeader>
        <SearchWrapper>
          <SearchForm>
            <SearchIcon />
            <input type="text" placeholder="Szukaj.." />
          </SearchForm>
          <button>
            <TuneIcon />
          </button>
        </SearchWrapper>
        <Categories />
        <OngoingTask />
      </ProfileSection>
    </>
  );
};

export default Profile;
