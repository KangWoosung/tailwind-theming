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

  const themedStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "var(--color-bg-card)",
      color: "var(--color-text-copy-primary)",
      borderColor: "var(--color-border)",
      "&:hover": {
        borderColor: "var(--color-border-hover)",
      },
    }),
    option: (styles: any, { isFocused, isSelected }: any) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "var(--color-bg-card)"
          : isFocused
          ? "var(--color-bg-card-hover)"
          : "var(--color-bg-card)",
        color: isSelected
          ? "var(--color-text-copy-primary)"
          : "var(--color-text-copy-primary)",
        "&:hover": {
          backgroundColor: "var(--color-bg-card-hover)",
          color: "var(--color-text-copy-primary)",
        },
      };
    },
  };

  return (
    <div>
      <h3>ThemeSelector</h3>
      <ReactSelect
        classNamePrefix="react-select"
        className="bg-card text-copy-primary "
        getOptionValue={(option) => getOptionValue(option)}
        getOptionLabel={(option) => option.theme}
        id="themeSelector"
        options={themeOptions}
        value={selectedTheme}
        onChange={(option) => onChangeAction(option as EachOption)}
        styles={themedStyles}
      />
    </div>
  );
};

export default ThemeSelector;
