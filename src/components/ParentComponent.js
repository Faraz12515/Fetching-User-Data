import React from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  const name = "faraz";
  const Name = (name, profession) => {
    console.log(`My name is ${name} and I am a ${profession}`);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent name={name} clickHandler={Name} />
    </div>
  );
}
