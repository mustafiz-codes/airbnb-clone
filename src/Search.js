import React, { useState } from "react";
import "./search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

// import

// Date picker component
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker
        class="dateRangePicker"
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <div className="searchGuestNumber">
        <h2>Number of guests</h2>
        <PeopleIcon />
      </div>

      <input className="searchInput" min={0} defaultValue={2} type="number" />
      <Button className="searchButton"> Search Airbnb</Button>
    </div>
  );
}

export default Search;
