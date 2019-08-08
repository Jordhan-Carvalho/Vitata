import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import MarketPage from "./pages/MarketPage";
import ProductPage from "./pages/ProductPage";
import NavBar from "./components/NavBar";
import AuthPage from "./components/Auth/AuthPage";
import CreateProduct from "./pages/CreateProduct";
import { getUser } from "./graphql/queries";
import { registerUser } from "./graphql/mutations";
import history from "./utils/history";
import UserContext from "./utils/userContext";
import "react-toastify/dist/ReactToastify.css";

import Container from "@material-ui/core/Container";

//Amplify
import { API, graphqlOperation, Auth, Hub, Logger } from "aws-amplify";

function App() {
  const [user, setUser] = useState(null);
  const [userAttributes, setUserAttributes] = useState(null);

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Listen to Auth events https://aws-amplify.github.io/docs/js/hub
  const logger = new Logger("My-Logger");

  const listener = data => {
    switch (data.payload.event) {
      case "signIn":
        console.log("signed in");
        getUserData();
        registerNewUser(data.payload.data);
        history.push("/");
        toast.success("Bem-vindo(a)", { autoClose: 1500 });
        break;
      case "signUp":
        console.log("signed up");
        break;
      case "signOut":
        console.log("signed out");
        setUser(null);
        history.push("/auth");
        break;
      case "signIn_failure":
        logger.error("user sign in failed");
        break;
      case "configured":
        logger.error("the Auth module is configured");
        break;
      default:
        return;
    }
  };

  Hub.listen("auth", listener);

  // Auth.currentAuthenticatedUser needs to sign ou/sign after change attribute
  // Better approach if email is the username
  const getUserData = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    userData ? setUser(userData) : setUser(null);
    getUserAttributes(userData);
  };

  // Solution userAttributes
  const getUserAttributes = async authUserData => {
    const attributesArr = await Auth.userAttributes(authUserData);
    const attributesObj = Auth.attributesToObject(attributesArr);
    setUserAttributes(attributesObj);
  };

  const registerNewUser = async signInData => {
    const id = signInData.attributes.sub;
    const { data } = await API.graphql(graphqlOperation(getUser, { id }));
    // if we cant get a user (user not registered before, register user)
    if (!data.getUser) {
      try {
        const registerUserInput = {
          id,
          username: signInData.username,
          email: signInData.attributes.email,
          phone: signInData.attributes.phone_number,
          registered: true
        };
        const newUser = await API.graphql(
          graphqlOperation(registerUser, { input: registerUserInput })
        );
        console.log(newUser);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, userAttributes }}>
      <ToastContainer />
      <NavBar user={user} signOut={signOut} />
      <Container maxWidth="lg">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/perfil"
            component={props => <ProfilePage {...props} />}
          />
          <Route exact path="/loja/:id" component={MarketPage} />
          <Route exact path="/auth" component={AuthPage} />
          <Route
            exact
            path="/novo"
            component={props => <CreateProduct {...props} user={user} />}
          />
          <Route
            exact
            path="/produto/:id"
            component={props => <ProductPage {...props} user={user} />}
          />
        </Switch>
      </Container>
    </UserContext.Provider>
  );
}

export default App;
