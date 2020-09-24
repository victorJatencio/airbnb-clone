import React from "react";
import { Button } from "@material-ui/core";
import SearchResult from "../SearchResult/SearchResult";

import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stay · 26 august to 30 august · 2 guest</p>
        <h1>Stay nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/5ca80f9b-f05a-4e98-b5d2-7083a7dd4b2f.jpg?im_w=1200"
        location="Delhi, New York, United States"
        title="Catskills Cabin on 34 acre Estate stunning views"
        description="Welcome to The Monroe House Cabin. Tucked away just behind our Main house and Barn on our picturesque 34 acre estate."
        star={4.73}
        price="$163/ night"
        total="$489.00"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/335e0a9a-960b-48e3-a210-ad8edae38353.jpg?im_w=1200"
        location="Hammonton, New Jersey, United States"
        title="Mullica River Cottage - Waterfront in Sweetwater"
        description="Located in the heart of the NJ Pine Barrens, with the Wharton State Forest as your backyard, this bright and cozy cottage is steps from the Mullica River in Sweetwater, NJ- South Jersey's best kept secret."
        star={4.98}
        price="$152/ night"
        total="$456.00"
      />
    </div>
  );
}

export default SearchPage;
