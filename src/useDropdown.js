import React, { useState } from "react";

function useDropdown(label, defaultState, options) {
  var [state, setState] = useState(defaultState);
  var id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  function handleChange(e) {
    setState(e.target.value);
  }

  function mapOptions(item) {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  }

  function Dropdown() {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={handleChange}
          onBlur={handleChange}
          disabled={options.length == 0}
        >
          <option>All</option>
          {options.map(mapOptions)}
        </select>
      </label>
    );
  }

  return [state, Dropdown, setState];
}

export default useDropdown;
