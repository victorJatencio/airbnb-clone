import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import DatePicker from "../DatePicker/DatePicker";

import "./Banner.css";

function Banner() {
  const history = useHistory();
  const [showDatePicker, setDatePicker] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showDatePicker && <DatePicker />}
        <Button
          onClick={() => setDatePicker(!showDatePicker)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showDatePicker ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
