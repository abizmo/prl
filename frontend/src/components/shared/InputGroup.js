import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.nord10};
  flex: 1;
  margin-bottom: 1rem;
  & #sub:only-child {
    margin-bottom: 0;
  }
  text-align: center;
  #sub:nth-child(even) {
    margin-left: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const Title = styled.h3`
  background-color: ${({ theme }) => theme.nord10};
  color: ${({ theme }) => theme.nord6};
  margin: 0;
  padding: 0.25rem;
`;

const InputGroup = ({ children, sub, title }) => {
  return (
    <Container id={sub && "sub"}>
      <Title
        style={sub ? { fontWeight: "400", textTransform: "uppercase" } : {}}
      >
        {title}
      </Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default InputGroup;
