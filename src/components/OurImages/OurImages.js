import React from "react";
import "./OurImages.css";

class OurImages extends React.Component {
  render() {
    return (
      <div className="section" id="ourImages">
        <ul className="image_grid">
          <li role="img" aria-label="Iceland" className="small" />
          <li role="img" aria-label="Isle of Skye" className="small" />
          <li role="img" aria-label="Cuba" className="small" />
        </ul>
        </div>
    );
  }
}

export default OurImages;
