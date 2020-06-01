import * as React from "react";
import { meta, html } from "../readme.md";
import { render } from "react-dom";
import "./index.css";

console.log("meta: ", meta);
console.log("html: ", html);

// document.getElementById("markdown").innerHTML = html;

const App = () => {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

render(<App />, document.getElementById("markdown"));
