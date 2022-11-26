import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
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
