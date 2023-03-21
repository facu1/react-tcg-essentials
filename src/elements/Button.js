import styled, { css } from "styled-components";

const Button = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  font-weight: ${({ length }) => (length < 2 ? "bold" : "normal")};
  border: none;
  ${({ color }) =>
    color &&
    css`
      background-color: ${({ length, color, theme }) =>
        length < 2 ? "red" : length < 3 ? "lightpink" : theme[color]};
      color: ${({ length }) => (length < 2 ? "black" : "white")};
    `}
  cursor: pointer;
`;

export default Button