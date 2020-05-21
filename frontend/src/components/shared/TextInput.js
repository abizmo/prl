import styled from "styled-components";

const TextInput = styled.input`
  border: 1px solid ${({ theme }) => theme.nord4};
  box-sizing: border-box;
  flex: 1;
  font-size: 0.9rem;
  padding: 0.25rem;
`;

export default TextInput;
