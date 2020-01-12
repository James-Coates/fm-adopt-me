import React from "react";
import Pet from "./Pet";

function Results({ pets }) {
  console.log(pets);
  return (
    <div className="search">
      {pets.length == 0 ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(function renderPet(pet) {
          var {
            type = "type",
            id = "id",
            name = "name",
            breeds: { breed = "breed" } = {},
            photos,
            contact: { address: { city = "city", state = "state" } = {} } = {}
          } = pet || {};

          return (
            <Pet
              animal={type}
              key={id}
              name={name}
              breed={breed}
              media={photos}
              location={`${city}, ${state}`}
              id={id}
            />
          );
        })
      )}
    </div>
  );
}

export default Results;
