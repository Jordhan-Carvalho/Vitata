import React, { useState } from "react";
import {
  Authenticator,
  SignIn,
  SignUp,
  ConfirmSignUp,
  Greetings
} from "aws-amplify-react";
import { map } from "../../utils/amplifyLang";
import CustomSignIn from "./CustomSignIn";
import CustomSingUp from "./CustomSignUp";
import CustomConfirmSignUp from "./CustomConfirmSignUp";

const AuthPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    phone_number: "",
    email: "",
    code: ""
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Authenticator
      hide={[SignIn, SignUp, ConfirmSignUp, Greetings]}
      errorMessage={map}
    >
      <CustomSignIn />
      <CustomSingUp
        override={"SignUp"}
        inputs={formData}
        handleFormInput={onChange}
      />
      <CustomConfirmSignUp
        override={"ConfirmSignUp"}
        inputs={formData}
        handleFormInput={onChange}
      />
    </Authenticator>
  );
};

export default AuthPage;
