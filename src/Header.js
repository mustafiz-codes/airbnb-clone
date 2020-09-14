import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_icon"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.spekless.com%2Fwp-content%2Fuploads%2F2018%2F03%2FAirbnb-Logo.png&f=1&nofb=1"
        alt="airbunb logo"
      />

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
