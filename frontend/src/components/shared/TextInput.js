import styled from "styled-components";

const TextInput = styled.input`
  border: 1px solid ${({ theme }) => theme.nord4};
  box-sizing: border-box;
  color: ${({ theme }) => theme.nord1};
  flex: 1;
  font-size: 0.9rem;
  min-width: 120px;
  padding: 0.25rem;
`;

export default TextInput;