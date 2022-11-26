import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 15px;
  span {
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const ErrMsg = ({ msg }) => {
  return (
    <Wrapper>
      <span>{msg}</span>
    </Wrapper>
  );
};

export default ErrMsg;
