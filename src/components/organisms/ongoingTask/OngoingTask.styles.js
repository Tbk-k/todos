import styled from "styled-components";

export const OngoingWrapper = styled.div`
  div:first-child {
    margin: 30px 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 22px;
      font-weight: 400;
      margin: 0;
    }
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.orange};
      font-size: 12px;
    }
  }
`;

export const OngoingCard = styled.div`
  width: 100%;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 20px;
  margin-bottom: 20px;
  h3 {
    margin: 0;
  }
  p {
    font-size: 14px;
    width: 75%;
    color: ${({ theme }) => theme.colors.grey};
    margin-top: 0;
  }
  span {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.grey};
    svg {
      fill: ${({ theme }) => theme.colors.orange};
      font-size: 15px;
      margin-right: 10px;
    }
  }
`;
