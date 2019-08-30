import React from "react";
import "./Menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="section" id="food">
        <h2>
          {this.props.t("menu.title", {
            framework: "react-i18next"
          })}
        </h2>
        <p>
          {this.props.t("menu.paragraph", {
            framework: "react-i18next"
          })}
        </p>
        <hr />
        <ul className="image_grid">
          <li role="img" aria-label="Iceland" className="small" />
          <li role="img" aria-label="Isle of Skye" className="large" />
          <li role="img" aria-label="Maldive" className="large" />
          <li role="img" aria-label="Cuba" className="small" />
        </ul>
      </div>
    );
  }
}

export default Menu;
