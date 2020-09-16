import React from "react";
import "./searchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult_heart" />
      <div className="searchResult_info">
        <div className="searchResult_infoTop">
          <p>{location}</p>
          <h2>{title}</h2>
          <p>_______</p>
          <p>{description}</p>
        </div>
        <div className="searchResult_infoBottom">
          <div className="searchResult_stars">
            <StarIcon className="searchResult_star" />
            <strong>{star}</strong>
          </div>

          <div className="searchResult_price">
            <h3>{price}</h3>
            <h3>{total}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
