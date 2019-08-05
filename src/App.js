import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import MarketPage from "./pages/MarketPage";
import ProductPage from "./pages/ProductPage";
import NavBar from "./components/NavBar";

//Amplify
import { API, graphqlOperation, Auth, Hub, Logger } from "aws-amplify";
import { Authenticator, AmplifyTheme } from "aws-amplify-react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <NavBar />
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/perfil" component={() => <ProfilePage />} />
          <Route exact path="/loja/:id" component={MarketPage} />
          <Route exact path="/produto/:id" component={ProductPage} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
