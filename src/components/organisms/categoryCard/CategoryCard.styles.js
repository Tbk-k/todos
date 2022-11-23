import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: 30px;
  flex: 1;
  padding: 20px;

  h3 {
    font-weight: 400;
    margin: 0;
  }

  span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.grey};
  }
`;
