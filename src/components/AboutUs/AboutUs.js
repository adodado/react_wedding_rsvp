import React from "react";
import "./AboutUs.css";
//handling the translations

class AboutUs extends React.Component {
  render() {
    return (
      <div className="section" id="aboutUs">
        <h2 className="contactus">
          {this.props.t("contactus.title", {
            framework: "react-i18next"
          })}
        </h2>
        <p className="moreinfo">
          {this.props.t("contactus.summary", {
            framework: "react-i18next"
          })}{" "}
          <span>
            <a href="mailto:admir.cosic.82@gmail.com">
              {this.props.t("contactus.email", {
                framework: "react-i18next"
              })}
            </a>
          </span>
        </p>
        <div id="brideandgroom">
          <div id="bride">
          <h1>Amela</h1>
            <img
              alt="Amela profile"
              title="Amela profile"
              className="profilePicture"
              src="https://images.unsplash.com/photo-1494853795385-0101bc3acfb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1384&q=80"
            />
            <p className="moreinfo">
              {this.props.t("contactus.bridesummary", {
                framework: "react-i18next"
              })}
            </p>
          </div>
          <div id="groom">
          <h1>Admir</h1>
            <img
              title="Admir profile"
              alt="Admir profile"
              className="profilePicture"
              src="https://images.unsplash.com/photo-1533716471059-d428c5a9b1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
            />
            <p className="moreinfo">
              {this.props.t("contactus.groomsummary", {
                framework: "react-i18next"
              })}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
