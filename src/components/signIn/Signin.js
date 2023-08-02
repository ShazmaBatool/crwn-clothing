import React, { Fragment } from "react";
import { useState } from "react";
import "./Signin.css";
import Navbar from '../navbar/Navbar'
import { signInWithGooglePopup } from "../../firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../firebase/firebase.utils.js";
import { signUpWithEmailPassword } from "../../firebase/firebase.utils.js";
import { useUserContext } from '../../userContext';


const Signin = () => {
  const { user, setUser } = useUserContext();

  async function onClickHandler() {
    const { user } = await signInWithGooglePopup();
    const response = await createUserDocumentFromAuth(user);
    console.log('response sign in with Google', response);
    setUser({ ...user, isSignedIn: true, displayName: user.displayName });
    console.log('USER:---',user);
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleChange(event) {
    event.preventDefault();
    let value = event.target.value;
    let target = event.target.id;
    if (target === "dispName") {
      setName(value);
    } else if (target === "email") {
      setEmail(value);
    } else if (target === "pwd") {
      setPassword(value);
    } else {
      setConfirmPassword(value);
    }
  }

  function ConfirmPassword(password, confirmPassword) {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  }

  function goToHomePage(){
    console.log('Go to homepage asap')
  }


const handleSignUp = async () => {
  try {
    if (!ConfirmPassword(password, confirmPassword)) {
      alert('Password and confirm password must match');
      return; // Return early if passwords don't match
    }

    const data  = await signUpWithEmailPassword(email, password); // Pass "name" as displayName
    console.log(data);
    if (data !== null || data!==undefined) {
      try {
        await createUserDocumentFromAuth(data.user ,name);
        console.log('sign in user', data);
        console.log('sign in name', name);
        setUser({ ...user, isSignedIn: true, displayName: name });

      } catch (error) {
        console.log('Error updating user profile:', error);
      }
      alert('User signed up and data stored in Firebase.');
      // Reset input fields after successful sign-up
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      alert('User is null or undefined. Sign-up failed.');
    }
  } catch (error) {
    alert('Error signing up');
    console.log(error);
  }
};

  return (
    <Fragment>
      <Navbar/>
      <div className="signin">
        <div>
          <h2>I already have an account</h2>
          <p>Sign in with your email and password</p>
          <input placeholder="Email" className="input" /><br />
          <input placeholder="Password" className="input" /><br />
          <button className="btn-signin" onClick={goToHomePage}>SIGN IN</button>
          <button className="btn-signin" onClick={onClickHandler}>
            GOOGLE SIGN IN
          </button>
        </div>
        <div>
          <h2>I do not have an account</h2>
          <p>Sign up with your email and password</p>
          <input
            required
            placeholder="Display Name"
            className="input"
            onChange={handleChange}
            type="text"
            id="dispName"
            value={name}
          /><br />
          <input
            placeholder="Email"
            className="input"
            onChange={handleChange}
            type="text"
            id="email"
            value={email}
          /><br />
          <input
            placeholder="Password"
            className="input"
            onChange={handleChange}
            type="password"
            id="pwd"
            value={password}
          /><br />
          <input
            placeholder="Confirm Password"
            className="input"
            onChange={handleChange}
            type="password"
            id="confirmPwd"
            value={confirmPassword}
          /><br />
          <button className="btn-signin" onClick={handleSignUp}>
            SIGN UP
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Signin;
