import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    font-size: 32px;
    line-height: 1.2;
    font-weight: 400;
    margin: 50px 0;
    span {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const ImgWrapper = styled.div`
  text-align: center;
  margin: 60px 0 30px;
  img {
    width: 100%;
  }
`;

export const HomeContent = styled.div`
  margin-top: 40px;
  p {
    width: 85%;
    font-size: 18px;
    margin: 0 0 40px;
    font-weight: 400;
    line-height: 1.25;
    margin-bottom: 60px;
  }
`;
