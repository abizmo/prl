import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import TextInput from "#root/components/shared/TextInput";
import { setSession } from "#root/store/ducks/session";

const Form = styled.form`
  display: flex;
  flex-flow: row nowrap;
`;

const Label = styled.label`
  align-items: baseline;
  box-sizing: border-box;
  display: flex;
  flex: 0.5;
  :not(:first-child) {
    margin-left: 0.9rem;
  }
`;

const LabelText = styled.span`
  color: ${({ theme }) => theme.nord6};
  font-size: 0.9rem;
  margin-right: 0.3rem;
`;

const LoginButton = styled.button`
  background-color: #fff;
  border: 3px solid ${({ theme }) => theme.nord4};
  display: inline-block;
  margin-left: 1rem;
`;

const mutation = gql`
  mutation($userId: String!, $password: String!) {
    createUserSession(userId: $userId, password: $password) {
      _id
      userId
    }
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const [createUserSession] = useMutation(mutation);
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm();

  const onSubmit = handleSubmit(async ({ userId, password }) => {
    try {
      const {
        data: { createUserSession: createdUserSession },
      } = await createUserSession({
        variables: { userId, password },
      });
      dispatch(setSession(createdUserSession));
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        <LabelText>Usuario</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="userId"
          type="text"
          ref={register}
        />
      </Label>
      <Label>
        <LabelText>Contraseña</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="password"
          type="password"
          ref={register}
        />
      </Label>
      <LoginButton disabled={isSubmitting} type="submit">
        Login
      </LoginButton>
    </Form>
  );
};

export default Login;
