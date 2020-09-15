import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="homeSection">
        <Card
          src="https://a0.muscache.com/pictures/46251622-d87d-430e-b4a9-33c22a26f620.jpg"
          title="Surprise Stays Next Door"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Card
          src="https://a0.muscache.com/pictures/09d3634f-575c-4930-a51c-32d49528fc42.jpg"
          title="Instant Book some serendipty"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Card
          src="https://a0.muscache.com/pictures/a88e5857-39fc-4e05-a9fe-75e846a89651.jpg"
          title="Remote discoveries for two"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Card
          src="https://a0.muscache.com/pictures/9188933d-6b73-4195-8de9-c855cad4c97d.jpg"
          title="Otherworldly national parks"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>

      <div className="homeSection">
        <Card
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WYVahHADo1FYFb6SXJ4vigHaEo%26pid%3DApi&f=1"
          title="3 Bedroom Newyork House"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="70$"
        />
        <Card
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.OLcgyNX2o358zOacZCLUgQHaFj%26pid%3DApi&f=1"
          title="2 Bedroom Montreal House"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="60$"
        />
        <Card
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.zsPuuMRiSVaHaV1R4pwPagHaEK%26pid%3DApi&f=1"
          title="5 Bedroom London House"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="110$"
        />
      </div>
    </div>
  );
}

export default Home;
