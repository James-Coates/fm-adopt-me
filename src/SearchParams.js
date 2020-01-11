import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

function SearchParams() {
  var [location, setLocation] = useState("Seattle, WA");
  var [breeds, setBreeds] = useState([]);
  var [animal, AnimalDropdown] = useDropdown("Animals", "dog", ANIMALS);
  var [breed, BreedDropdown] = useDropdown("Breeds", "", breeds);

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  return (
    <div className="search-params">
      <form>
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
    </div>
  );
}

export default SearchParams;
