import React from "react";
import Map from "../Map/Map";
import "./Location.css";

class Location extends React.Component {
  render() {
    return (
      <div className="location section" id="location">
        <h2>{this.props.t("location.title", {
            framework: "react-i18next"
          })}</h2>
        <p>
          {this.props.t("location.introduction", {
            framework: "react-i18next"
          })}
        </p>
        <hr />
        <ul className="image_grid">
          <li
            role="img"
            aria-label="label 1"
            className="small"
          />
          <li
            role="img"
            aria-label="label 2"
            className="large"
          />
          <li role="img" aria-label="label 3" className="large" />
          <li role="img" aria-label="label 4" className="small" />
        </ul>
        <p>
          {this.props.t("location.cerimonia", {
            framework: "react-i18next"
          })}{" "}
        </p>
        <p>
          {this.props.t("location.mapsuggestions", {
            framework: "react-i18next"
          })}
        </p>
        <Map />
      </div>
    );
  }
}

export default Location;
