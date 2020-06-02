import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.nord10};
  border: 2px solid ${({ theme }) => theme.nord10};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.nord6};
  font-size: 0.9rem;
  min-width: 120px;
  padding: 0.25rem;
  margin: 1rem;
`;

export const ButtonSecondary = styled(Button)`
  background-color: ${({ theme }) => theme.nord6};
  border: 2px solid ${({ theme }) => theme.nord10};
  box-sizing: border-box;
  color: ${({ theme }) => theme.nord10};
`;

export default Button;
