import React from "react";
import "./Background.scss";

function Background(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${require(`../../assets/images/${props.background}.jpg`)})`
      }}
      className="mainSearchingSection"
    >
      {props.children}
    </div>
  );
}

export default Background;
