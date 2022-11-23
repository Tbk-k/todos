import styled from "styled-components";

export const HomeHeader = styled.header`
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 5px;
  align-items: center;
  svg {
    fill: ${({ theme }) => theme.colors.orange};
    font-size: 20px;
  }
  span {
    font-weight: 100;
  }
`;

export const HomeContent = styled.section`
  padding: 0px 20px 20px;
  h1 {
    font-size: 35px;
    line-height: 1.2;
    font-weight: 500;
    span {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  text-align: center;
  img {
    width: 90%;
    margin: 0 auto;
  }
`;

export const StyledParagraph = styled.p`
  width: 75%;
  font-size: 14px;
  margin: 0 0 40px;
  font-weight: 100;
  line-height: 1.25;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  text-align: center;
  a {
    background-color: ${({ theme }) => theme.colors.orange};
    border: none;
    border-radius: 30px;
    font-weight: bold;
    font-size: 16px;
    padding: 10px 35px;
    cursor: pointer;
    -webkit-box-shadow: 0px 14px 19px -13px #ff7260;
    -moz-box-shadow: 0px 14px 19px -13px #ff7260;
    box-shadow: 0px 14px 19px -13px #ff7260;
    &::after {
      content: "!";
    }
  }
`;
