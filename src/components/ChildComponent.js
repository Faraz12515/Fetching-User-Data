import React from "react";

export default function ChildComponent(props) {
  return (
    <div>
      <h1>Child Component</h1>
      <h1>Hi, {props.name}</h1>
      <button
        onClick={() =>
          props.clickHandler("Syed Faraz Ali", "Software Developer")
        }
      >
        My Info
      </button>
    </div>
  );
}
