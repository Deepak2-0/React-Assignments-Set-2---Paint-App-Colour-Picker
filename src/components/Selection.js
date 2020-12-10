import React, { useState } from "react";
import "../styles/Child.css";

export default function Selection(props) {
  const [color, setColor] = useState({ background: "" });
  const { applyColor } = props;
  return (
    <>
      <div
        className="fix-box"
        style={color}
        onClick={() => applyColor(setColor)}
      >
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
}
