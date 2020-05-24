import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { clearSession } from "#root/store/ducks/session";

const LogoutLink = styled.a.attrs({ href: "#" })`
  color: ${({ theme }) => theme.nord9};
  display: inline-block;
  margin-left: 0.25rem;
`;
const User = styled.div`
  color: ${({ theme }) => theme.nord6};
  display: inline-block;
  font-size: 1rem;
  margin-left: 0.25rem;
`;

const Wrapper = styled.div`
  color: ${({ theme }) => theme.nord4};
  font-size: 0.9rem;
`;

const mutation = gql`
  mutation($sessionId: ID!) {
    deleteUserSession(sessionId: $sessionId)
  }
`;

const Account = () => {
  const dispatch = useDispatch();
  const [deleteUserSession] = useMutation(mutation);
  const session = useSelector((state) => state.session);

  return (
    <Wrapper>
      Logged in as <User>{session.userId}</User>
      <LogoutLink
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(clearSession());
          deleteUserSession({ variables: { sessionId: session._id } });
        }}
      >
        Logout
      </LogoutLink>
    </Wrapper>
  );
};

export default Account;
