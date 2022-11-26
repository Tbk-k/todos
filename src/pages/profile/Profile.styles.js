import styled from "styled-components";

export const ProfileSection = styled.section`
  max-width: 450px;
  margin: 0 auto;
`;

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-bottom: 0px;
    font-weight: 300;
    font-size: 20px;
  }
  span {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 12px;
    font-weight: 200;
  }
`;


export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  button {
    margin-right: 10px;
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
    }
  }
`;

export const SearchForm = styled.form`
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 5px 30px;
  svg {
    fill: ${({ theme }) => theme.colors.grey};
    margin-right: 10px;
    font-size: 18px;
    cursor: pointer;
  }
  input {
    background-color: transparent;
    border: none;
    &::placeholder {
      font-family: inherit;
      font-size: 16px;
    }
    &:focus-visible {
      outline: none;
    }
  }
`;
