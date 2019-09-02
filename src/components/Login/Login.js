import React from "react";
import "./Login.css";
//connecting to the database
// import firebase from "firebase";
import base, { firebaseApp } from "../../base";
import { translate } from "react-i18next";

//handling the translations
import i18next from "../i18next";

class Login extends React.Component {
  myUsernameInput = React.createRef();
  myEmailInput = React.createRef();
  myPasswordInput = React.createRef();

  authHandler = async authData => {
    const email = authData.user.email
    const halfemail = email.substring(0, email.lastIndexOf("@"));
    const username = halfemail.replace(/[^\w\s]/gi, "");
    await base.post(`${username}/user`, {
      data: authData.user.uid
    });
  };
 
  handleSignUp = async event => {
    event.preventDefault();
    const weddingguests = [
    ]
    try {
      await weddingguests.forEach(guest => {
        firebaseApp
        .auth()
        .createUserWithEmailAndPassword(
          guest.username.toLowerCase()+"@cometoawedding.com",
          guest.password
        )
        .then(this.authHandler);
      });
    } catch (error) {
      alert(error);
    }
  };

  handleLogin = async event => {
    event.preventDefault();
    const email = this.myEmailInput.current.value.toLowerCase() +'@cometoawedding.com';
    try {
      console.log(1);
      await firebaseApp
        .auth()
        .signInWithEmailAndPassword(
          email,
          this.myPasswordInput.current.value
        )
        .then(this.authHandler);
      //go to the RSVP page
      const halfemail = email.substring(0, email.lastIndexOf("@"));
      const username = halfemail.replace(/[^\w\s]/gi, "");
      this.props.history.push(`/user/${username}`);
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div className="loginContainer">
        <form className="login-form">
        <div id="languages">
          <button
            className="flags"
            id="bosnian"
            onClick={() => i18next.changeLanguage("bs")}
          />
          <button
            className="flags"
            id="english"
            onClick={() => i18next.changeLanguage("en")}
          />
        </div>
          <h2>
            {this.props.t("loginpage.title", { framework: "react-i18next" })}
          </h2>
          <p>
            {" "}
            {this.props.t("loginpage.intro", { framework: "react-i18next" })}
          </p>
          <div id="inputFields">
            <input
              name="email"
              type="text"
              required
              placeholder={this.props.t("loginpage.placeholderName", {
                framework: "react-i18next"
              })}
              ref={this.myEmailInput}
              onKeyPress={(e)=>{e.key === 'Enter' && e.preventDefault();}} 
            />
            <input
              required
              //onChange={this.handleChange}
              name="password"
              type="password"
              placeholder={this.props.t("loginpage.placeholderPassword", {
                framework: "react-i18next"
              })}
              ref={this.myPasswordInput}
              onKeyPress={(e)=>{e.key === 'Enter' && e.preventDefault();}} 
            />
          </div>
          <button type="submit" onClick={this.handleLogin}>
            {this.props.t("loginpage.loginbutton", {
              framework: "react-i18next"
            })}
          </button>
        </form>
      </div>
    );
  }
}

export default translate("common")(Login);
