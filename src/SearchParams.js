import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

function SearchParams() {
  var [location, setLocation] = useState("Seattle, WA");
  var [breeds, setBreeds] = useState([]);
  var [animal, AnimalDropdown] = useDropdown("Animals", "dog", ANIMALS);
  var [breed, BreedDropdown, setBreed] = useDropdown("Breeds", "", breeds);
  var [pets, setPets] = useState([]);

  useEffect(loadBreeds, [animal, setBreed, setBreeds]);

  // *****

  function loadBreeds() {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(function mapBreedNames({ breeds }) {
      var breedStrings = breeds.map(function getBreedName({ name }) {
        return name;
      });
      setBreeds(breedStrings);
    }, console.error);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  async function requestPets() {
    var { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    setPets(animals || []);
  }

  function handleSubmit(e) {
    e.preventDefault();
    requestPets();
  }

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={handleLocationChange}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
}

export default SearchParams;
