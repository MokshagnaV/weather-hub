import React from "react";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import apiCalls from "../services/apiCalls";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState(null);

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearch(searchData.value);
  };

  const loadOptions = async (input) => {
    if (!input) {
      return {
        options: [],
      };
    }
    const { data } = await apiCalls.getLocationSearchResults(input);
    return {
      options: data.map((city) => {
        return {
          value: `${city.lat},${city.lon}`,
          label: `${city.name}, ${city.country}`,
        };
      }),
    };
  };

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "transparent",
    }),
  };

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
      styles={customStyles}
    />
  );
};

export default Search;

/* <select name="convention" id="convention" onChange={onChoose}>
      <option value="temp_c">Celsius</option>
      <option value="temp_f">Fahrenheit</option>
    </select> */
