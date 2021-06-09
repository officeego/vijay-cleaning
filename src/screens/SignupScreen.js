import React from "react";
import { Link } from "react-router-dom";
import FooterSecondary from "../FooterSecondary";
import "./SignupScreen.css";
import SignupForm from "../SignupForm";
import CleanFooter from "../cleaning/CleanFooter";
import { FiNavigation } from 'react-icons/fi'
import tazzerclean from '../images/tazzerclean.png'


function SignupScreen() {
  return (
    <>
    <div className="signupScreen">
      <div className="signupScreen__header">
        <Link to="/">
          <img
            src={tazzerclean}
            alt="Home"
          />
           {/* <FiNavigation className="arrow-pointer"/> */}
        </Link>
      </div>
      <h1 className="signupScreen__heading">Create an account</h1>
      <div className="signupScreen__rewards">
        <h4>TazzerCleaner® REWARDS</h4>
        <p>
          Join TazzerCleaner Rewards to earn Stars for free Cleaning Services, any way
          you pay. Get access to mobile ordering, a birthday Reward, and{" "}
          <Link>more</Link>.
        </p>
      </div>
      <SignupForm />
      <FooterSecondary alignItems="center" flexDirection="column" />
    </div>
    <CleanFooter />
    </>
  );
}

export default SignupScreen;
