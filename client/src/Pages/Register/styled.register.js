import styled from "styled-components";
import FormImage from "./FormImage.jpg";

export const MainWrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

export const RegisterForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const RegisterFormContainer = styled.div`
  height: 80%;
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: black;

  div {
    flex: 1;
    height: 100%;
  }
`;

export const FormImageWrap = styled.div`
  background: url(${FormImage});
  background-size: cover;
  background-position: center;
  opacity: 0.7;
`;

export const FormWrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
