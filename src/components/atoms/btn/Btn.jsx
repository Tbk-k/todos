import React from "react";
import styled from "styled-components";

const BtnWrapper = styled.div`
  width: 100%;
  text-align: center;
  button {
    background-color: ${({ theme }) => theme.colors.orange};
    border: none;
    text-transform: uppercase;
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

const Btn = ({ width, label, onClick }) => {
  return (
    <BtnWrapper>
      <button style={{ width: width }} onClick={onClick}>
        {label}
      </button>
    </BtnWrapper>
  );
};

export default Btn;
