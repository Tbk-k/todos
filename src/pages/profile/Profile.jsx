import React from "react";
import {
  ProfileHeader,
  ProfileSection,
  SearchForm,
  SearchWrapper,
} from "./Profile.styles";

import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import Categories from "../../components/organisms/categories/Categories";
import OngoingTask from "../../components/organisms/ongoingTask/OngoingTask";
import ProfileIcon from "../../components/atoms/profilIcon/ProfileIcon";
import CreateNew from "../../components/atoms/createNew/CreateNew";
import { useSelector } from "react-redux";

const Profile = () => {
  const { name } = useSelector((state) => state.user.userInfo);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Athiti:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <ProfileSection>
        <ProfileHeader>
          <div>
            <p>Cześć, {name}</p>
            <span>5 zadań rozpoczętych</span>
          </div>
          <ProfileIcon />
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
      <CreateNew />
    </>
  );
};

export default Profile;
