import React from "react";

function DropDown({ onYearChange, onCategoryChange }) {
  const categoryList = [
    "chemistry",
    "economics",
    "literature",
    "peace",
    "physics",
    "medicine",
  ];

  let yearList = [];
  let year = 2018;
  while (year >= 1901) {
    if (year !== 1940 && year !== 1941 && year !== 1942) yearList.push(year);
    year--;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "20px",
      }}
    >
      <div>
        <span>Filter By Year </span>
        <select
          name="category"
          id="category"
          onChange={(e) => onYearChange(e.target.value)}
        >
          <option>All</option>
          {yearList.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <span>Filter By Category </span>
        <select
          name="year"
          id="year"
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option>All</option>
          {categoryList.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DropDown;
