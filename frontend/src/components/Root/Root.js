import React from "react";
import styled from "styled-components";

import Login from "./Login";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.nord6};
  flex: 1;
`;

const Header = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.nord10};
  box-sizing: border-box;
  display: flex;
  height: 60px;
  justify-content: flex-end;
  padding: 0 1rem;
  width: 100%;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  width: 100%;
`;

const Root = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Login />
        </Header>
        <Content>content</Content>
      </Container>
    </Wrapper>
  );
};

export default Root;
