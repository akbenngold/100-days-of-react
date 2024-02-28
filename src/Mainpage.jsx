import React from "react";

function Mainpage(props) {
  return (
    <div className="mainpage">
      <div className="page-title">{props.title}</div>
      <div className="page-subtitle">{props.subtitle}</div>
    </div>
  );
}

export default Mainpage;
