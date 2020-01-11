import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = function appRoot() {
  return (
    <div>
      <h1>Adoddfddddpqt Me!</h1>
      <Pet name="Poppy" animal="Dog" breed="Cocker Spaniel" />
      <Pet name="Sammy" animal="Cat" breed="Mixed" />
      <Pet name="Poppys" animal="Dog" breed="Cocker Spaniel" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
