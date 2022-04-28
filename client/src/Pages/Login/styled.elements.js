import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

export const LoginFormWrapper = styled(LoginWrapper)``;

export const LoginTextFieldsWrapper = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 400px;
  height: 600px;
  background: white;
  outline: 4px solid #3c9e63;
`;
