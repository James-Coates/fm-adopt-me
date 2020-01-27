import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

function SearchParams() {
  var [location, setLocation] = useState("Seattle, WA");
  var [breeds, setBreeds] = useState([]);
  var [animal, AnimalDropdown] = useDropdown("Animals", "dog", ANIMALS);
  var [breed, BreedDropdown, setBreed] = useDropdown("Breeds", "", breeds);
  var [pets, setPets] = useState([]);
  var [theme, setTheme] = useContext(ThemeContext);

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

  function handleThemeChange(e) {
    setTheme(e.target.value);
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
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={handleThemeChange}
            onBlur={handleThemeChange}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
}

export default SearchParams;
