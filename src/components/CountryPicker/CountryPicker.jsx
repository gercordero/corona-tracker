import React, { useState, useEffect } from "react";
import { fetchCountries } from "./../../api/index";
import { NativeSelect, FormControl } from "@material-ui/core";
import { CountryPickerContainer } from "./CountryPicker.styles";

const CountryPicker = ({ onCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchedCountries = async () => {
      setCountries(await fetchCountries());
    };
    fetchedCountries();
  }, []);

  return (
    <CountryPickerContainer>
      <FormControl className="form-control">
        <NativeSelect
          defaultValue=""
          onChange={(e) => onCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </CountryPickerContainer>
  );
};

export default CountryPicker;
