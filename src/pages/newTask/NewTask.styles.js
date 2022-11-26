import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      fill: ${({ theme }) => theme.colors.grey};
      cursor: pointer;
      font-size: 20px;
    }
    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      svg {
        fill: ${({ theme }) => theme.colors.orange};
        font-size: 20px;
      }
      p {
        font-size: 14px;
        font-weight: 100;
      }
    }
  }
  h2 {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
  }
`;

export const StyledForm = styled.form`
  label {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 14px;
    font-weight: 100;
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
    &:focus-visible {
      outline: none;
    }
  }
`;

export const FormInnerWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 5px));
  gap: 10px;
`;
export const FormGroup = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: 15px;
  svg {
    font-size: 20px;
    margin: 0 10px;
  }
  &:first-of-type {
    svg {
      fill: ${({ theme }) => theme.colors.orange};
    }
  }
  &:last-of-type {
    svg {
      fill: ${({ theme }) => theme.colors.yellow};
    }
  }
  &:nth-child(2) {
    svg {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }
  &:nth-child(3) {
    svg {
      fill: ${({ theme }) => theme.colors.green};
    }
  }

  input {
    border: none;
  }
  input[type="date"],
  input[type="time"] {
    position: relative;
    &::-webkit-calendar-picker-indicator {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
  }
  input[type="color"]::-webkit-color-swatch {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: none;
    cursor: pointer;
  }
`;

export const StyledTxtArea = styled.div`
  margin-top: 30px;
  label {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
  }
  textarea {
    display: block;
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grey};
    &::placeholder {
      font-size: 14px;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 50px;
  left: 0;
  text-align: center;
  button {
    width: 80%;
    background-color: ${({ theme }) => theme.colors.orange};
    border: none;
    border-radius: 30px;
    font-weight: 500;
    font-size: 16px;
    padding: 10px 35px;
    cursor: pointer;
    text-decoration: none;
    -webkit-box-shadow: 0px 14px 19px -13px #ff7260;
    -moz-box-shadow: 0px 14px 19px -13px #ff7260;
    box-shadow: 0px 14px 19px -13px #ff7260;
  }
`;
