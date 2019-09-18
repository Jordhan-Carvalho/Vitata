import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
//apollo
import AWSAppSyncClient from "aws-appsync";
import { ApolloProvider } from "react-apollo";
import { Rehydrated } from "aws-appsync-react";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import CssBaseline from "@material-ui/core/CssBaseline";
import history from "./utils/history";

// Amplify config
import Amplify, { Auth } from "aws-amplify";
import awsmobile from "./aws-exports";
import { I18n } from "aws-amplify";
import { dict } from "./utils/amplifyLang";

I18n.putVocabularies(dict);
I18n.setLanguage("pt");

Amplify.configure(awsmobile);

//Apollo config
const client = new AWSAppSyncClient({
  url: awsmobile.aws_appsync_graphqlEndpoint,
  region: awsmobile.aws_appsync_region,
  auth: {
    type: awsmobile.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken()
  },
  //Amazon uses amazon IAM to authorize calls to amazonS3. This provides the relevant IAM credentials
  complexObjectsCredentials: () => Auth.currentCredentials()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Rehydrated>
      <Router history={history}>
        <CssBaseline />
        <App />
      </Router>
    </Rehydrated>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
