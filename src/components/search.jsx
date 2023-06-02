import React from "react";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import apiCalls from "../services/apiCalls";

const Search = ({ onSearch, onChoose }) => {
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

  return (
    <div className="search-bar">
      <div className="search">
        <AsyncPaginate
          placeholder="Seacrh for City"
          debounceTimeout={600}
          value={search}
          onChange={handleChange}
          loadOptions={loadOptions}
        />
      </div>
      <select name="convention" id="convention" onChange={onChoose}>
        <option value="temp_c">Celsius</option>
        <option value="temp_f">Fahrenheit</option>
      </select>
    </div>
  );
};

export default Search;
