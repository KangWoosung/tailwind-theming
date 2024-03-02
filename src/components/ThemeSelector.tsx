/*  2024-03-02 22:21:56


*/

"use client";

import { EachOption, themeOptions } from "@/pages";
import React from "react";
import ReactSelect from "react-select";

type ThemeSelectorProps = {
  selectedTheme: EachOption;
  setSelectedTheme: (theme: EachOption) => void;
  saveToStorage: (val: EachOption) => void;
};

const ThemeSelector = ({
  selectedTheme,
  setSelectedTheme,
  saveToStorage,
}: ThemeSelectorProps) => {
  const getOptionValue = (option: EachOption) => option.id.toString(); // Convert to string if needed

  const onChangeAction = (option: EachOption) => {
    console.log("Selected option:", option);
    // Do something with the selected option
    setSelectedTheme(option);
    saveToStorage(option);
  };

  return (
    <div>
      <h3>ThemeSelector</h3>
      <ReactSelect
        isClearable
        classNamePrefix="react-select"
        getOptionValue={(option) => getOptionValue(option)}
        getOptionLabel={(option) => option.theme}
        id="themeSelector"
        options={themeOptions}
        value={selectedTheme}
        onChange={(option) => onChangeAction(option as EachOption)}
      />
    </div>
  );
};

export default ThemeSelector;
