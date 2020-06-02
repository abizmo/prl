import styled from "styled-components";

const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.nord4};
  box-sizing: border-box;
  flex: 1;
  font-size: 0.9rem;
  margin-top: 0.3rem;
  min-width: 120px;
  padding: 0.25rem;
  width: 100%;
`;

export default TextArea;
