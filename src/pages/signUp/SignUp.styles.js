import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  transform: translateY(12%);
  h2 {
    font-weight: 300;
    font-size: 35px;
    line-height: 1.36;
    span {
      color: ${({ theme }) => theme.colors.orange};
      text-decoration: underline;
    }
  }
  form {
    label {
      color: ${({ theme }) => theme.colors.grey};
      font-weight: 500;
      font-size: 16px;
    }
    input {
      display: block;
      width: 100%;
      border: none;
      background-color: transparent;
      border-bottom: ${({ theme }) => `1px solid ${theme.colors.bgLight}`};
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 300px;
      outline: none;
    }
  }
`;

export const StyledDiv = styled.div`
  margin: 50px 0 40px;
  p {
    line-height: 1.4;
    a {
      cursor: pointer;
      &:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.orange};
      }
    }
  }
`;
