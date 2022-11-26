import React from "react";
import ProfilImg from "../../../assets/img/head.png";
import styled from "styled-components";

export const ProfileImg = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.bgLight};
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 30px;
  }
`;

const ProfileIcon = () => {
  return (
    <ProfileImg>
      <img src={ProfilImg} alt="" />
    </ProfileImg>
  );
};

export default ProfileIcon;
