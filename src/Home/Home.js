import React from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experience"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/6374f961-a19b-473a-a2be-8bf0ce2dc166.jpg?im_w=720"
          title="Watson Woods Cabin"
          description="Far from noise and distraction. Surrounded by wilderness yet only four miles to the town of Woodstock."
          price="$328/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/00b31b21-0110-4e0e-8ca7-4d90b8cfcc92.jpg?im_w=720"
          title="Spectacular Mountain Views"
          description="A newly renovated, stylish log home nestled on 7 private acres above the village of Margaretville, in the heart of Catskills Park. "
          price="$129/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/b557a1a0-88ab-4084-a89a-e5e58afba68e.jpg?im_w=720"
          title="Lake Hopatcong Getaway Cabin"
          description="The Alder House is a mountain escape located in the heart of the Poconos."
          price="$148/night"
        />
      </div>
    </div>
  );
}

export default Home;
