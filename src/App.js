import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { Footer } from "./Footer";
import { Fade } from "react-awesome-reveal";
import FeaturedScreen from "./screens/FeaturedScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MenuScreen from "./screens/MenuScreen";
import SignupScreen from "./screens/SignupScreen";
import Rewards from "./cleaning/Rewards";
import PreviousOrder from "./PreviousOrder";
import FavouriteProduct from "./FavouriteProduct";
import HttpsRedirect from 'react-https-redirect'
// import Cards from "./cleaning/Card";
import Contact from "./cleaning/Contact";
import MenuHeader from "./MenuHeader";
import CleanFooter from "./cleaning/CleanFooter";
import Cards from "./cleaning/Cards";
// import "./cleaning/Contact.css"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <HttpsRedirect>
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <HomeScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route exact path="/services">
            <Rewards />
          </Route>
          <Route exact path="/about">
          <Header />
           <Cards />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/account/signin">
            {user ? <Redirect to="/menu" /> : <LoginScreen />}
          </Route>
          <Route exact path="/account/create">
            {user ? <Redirect to="/menu" /> : <SignupScreen />}
          </Route>
          <Route exact path="/menu">
            {!user ? (
              <Redirect to="/account/signin" />
            ) : (
              <>
                <Header menuPage />
                <MenuScreen />
              </>
            )}
          </Route>
          {user ? 
          <Route exact path="/menu/featured">
            <Header />
            <MenuHeader />
            <FeaturedScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          : <LoginScreen />}
          
          <Route path="/menu/previousorder" component={PreviousOrder} /> 
          <Route path="/menu/favouriteproduct" component={FavouriteProduct} />
          
        </Switch>
        {/* <CleanFooter /> */}
      </Router>
     
    </div>
    </HttpsRedirect>
  );
}

export default App;
