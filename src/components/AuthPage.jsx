import React from "react";
import { Authenticator, AmplifyTheme } from "aws-amplify-react";

const AuthPage = () => {
  return <Authenticator theme={theme} />;
};

//CSS custonomization of the auth comp
const theme = {
  ...AmplifyTheme,
  navBar: {
    ...AmplifyTheme.navBar,
    backgroundcolor: "#ffc0cb"
  },
  button: {
    backgroundcolor: "var(--amazonOrange)"
  },
  sectionBody: {
    ...AmplifyTheme.sectionBody,
    padding: "5px"
  },
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundcolor: "var(--squidInk)"
  }
};

export default AuthPage;
