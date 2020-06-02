import gql from "graphql-tag";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import graphqlClient from "#root/api/graphqlClient";
import { setSession } from "#root/store/ducks/session";

import AccountDetails from "./AccountDetails";
import IncidentsApp from "./IncidentsApp";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  margin: 0 auto;
  width: 100%;
`;

const Content = styled.div`
  background-color: ${props => props.theme.nord6};
  flex: 1;
  padding: 1rem;
`;

const Header = styled.div`
  align-items: center;
  background-color: ${props => props.theme.nord10};
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  width: 100%;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  width: 100%;
`;

const query = gql`
  {
    userSession(me: true) {
      _id
      userId
    }
  }
`;

const Root = () => {
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);
  const [initialised, setInitialised] = useState(false);

  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      if (data.userSession) {
        dispatch(setSession(data.userSession));
      }
      setInitialised(true);
    });
  }, []);

  if (!initialised) return "Loading...";

  return (
    <Wrapper>
      <Container>
        <Header>
          <AccountDetails />
        </Header>
        <Content>
          {session ? <IncidentsApp /> : "Login to view Incidents..."}{" "}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Root;
