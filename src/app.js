import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = function appRoot() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
