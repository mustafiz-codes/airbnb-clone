import { Button } from "@material-ui/core";
import React from "react";
import "./searchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays - 26 August to 30 August - 2 guest</p>
        <h1>Stays nearby</h1>

        <Button className="" variant="outlined">
          Cancellation Flexibility
        </Button>
        <Button className="" variant="outlined">
          Type of place
        </Button>
        <Button className="" variant="outlined">
          Price
        </Button>
        <Button className="" variant="outlined">
          Rooms and beds
        </Button>
        <Button className="" variant="outlined">
          More filters
        </Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/5a1543ea-e5ea-49fb-bc13-4fcd478a02e1.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Stay at Home Heaven"
        description="1 Guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star="4.75"
        price="30$ / night"
        total="117"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/c7341932-7d4e-4e67-89a4-e4ae9fe8d9b6.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Independent luxury studio apartment"
        description="2 Guest - 2 bedroom - 1 bed - 2 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star="3.9"
        price="40$ / night"
        total="157"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/5a1543ea-e5ea-49fb-bc13-4fcd478a02e1.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Stay at Home Heaven"
        description="1 Guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star="4.75"
        price="30$ / night"
        total="117"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/c7341932-7d4e-4e67-89a4-e4ae9fe8d9b6.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Independent luxury studio apartment"
        description="2 Guest - 2 bedroom - 1 bed - 2 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star="3.9"
        price="40$ / night"
        total="157"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/5a1543ea-e5ea-49fb-bc13-4fcd478a02e1.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Stay at Home Heaven"
        description="1 Guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star="4.75"
        price="30$ / night"
        total="117"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/c7341932-7d4e-4e67-89a4-e4ae9fe8d9b6.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Independent luxury studio apartment"
        description="2 Guest - 2 bedroom - 1 bed - 2 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star="3.9"
        price="40$ / night"
        total="157"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/5a1543ea-e5ea-49fb-bc13-4fcd478a02e1.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Stay at Home Heaven"
        description="1 Guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star="4.75"
        price="30$ / night"
        total="117"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/c7341932-7d4e-4e67-89a4-e4ae9fe8d9b6.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Independent luxury studio apartment"
        description="2 Guest - 2 bedroom - 1 bed - 2 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star="3.9"
        price="40$ / night"
        total="157"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/5a1543ea-e5ea-49fb-bc13-4fcd478a02e1.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Stay at Home Heaven"
        description="1 Guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star="4.75"
        price="30$ / night"
        total="117"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/c7341932-7d4e-4e67-89a4-e4ae9fe8d9b6.jpg?aki_policy=large"
        location="Private room in center of London"
        title="Independent luxury studio apartment"
        description="2 Guest - 2 bedroom - 1 bed - 2 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star="3.9"
        price="40$ / night"
        total="157"
      />
    </div>
  );
}

export default SearchPage;
