import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const PhoneImg = styled.img`
  width: 390px;
  height: 844px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  @media only screen and (min-width: 400px) {
    display: block;
  }
`;

export const TemplateWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 30px;
  @media only screen and (min-width: 400px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 345px;
    height: 810px;
    border-radius: 50px;
    z-index: 1;
  }
`;
