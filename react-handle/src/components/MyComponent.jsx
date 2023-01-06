import React from "react";

export default function MyComponent({ name, name2, children }) {
  // const { name, name2, children } = props;
  return (
    <div>
      <p>props.name = {name}</p>
      <p>props.name2 = {name2}</p>
      <p>props.children = {children}</p>
    </div>
  );
}
