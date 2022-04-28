import React from "react";
import {
  FormImageWrap,
  FormWrapper,
  MainWrap,
  RegisterFormContainer,
} from "./styled.register";

// mui imports
import { Person } from "@mui/icons-material";
import Form from "./Form";

const Register = () => {
  return (
    <>
      <MainWrap>
        <RegisterFormContainer>
          <FormImageWrap />
          <>
            <FormWrapper>
              <Person sx={{ height: 200, width: 150 }} color="primary" />
              <div className="form-section">
                <Form />
              </div>
            </FormWrapper>
          </>
        </RegisterFormContainer>
      </MainWrap>
    </>
  );
};

export default Register;
