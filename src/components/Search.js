import React, { useState } from "react";
import JSONDATA from "../DATA.json";

export default function Search() {
  const [searchData, setSearchData] = useState("");

  const handleChange = (e) => {
    setSearchData(e.target.value);
    // console.log(searchData);
  };

  return (
    <div className="bg text-white">
      <h1 className="text-center rounded py-2">Search Friends</h1>
      <div className="search-input-container">
        <input
          className="search-input"
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>
      {JSONDATA.filter((val) => {
        if (searchData === "") {
          return null;
        } else if (val.name.toLowerCase().includes(searchData.toLowerCase())) {
          return val;
        }
      }).map((v, i) => {
        return (
          <div className="search-data-container">
            <h4 className="search-data-content">{v.name}</h4>
          </div>
        );
      })}
    </div>
  );
}
