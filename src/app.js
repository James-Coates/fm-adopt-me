import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = function appRoot() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Poppy",
      animal: "Dog",
      breed: "Cocker Spaniel"
    }),
    React.createElement(Pet, {
      name: "Sky",
      animal: "Dog",
      breed: "King Charles"
    }),
    React.createElement(Pet, {
      name: "Sammy",
      animal: "Cat",
      breed: "Mixed"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
