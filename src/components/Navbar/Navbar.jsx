import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@material-ui/core";

import { ReactComponent as Logo } from "../../images/logo.svg";

import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <AppBar position="static" color="white">
        <Toolbar>
          <Link className="navbar__logo" to="/">
            <div className="navbar__logo__image">
              <Logo />
            </div>
            <h1 className="navbar__logo__brand">
              <span>Movie</span>
              <span>zilla</span>
            </h1>
          </Link>
          <div className="navbar__links">
            <Button
              className="navbar__link"
              component={Link}
              to="/"
              color="inherit"
            >
              Home
            </Button>
            <Button
              className="navbar__link"
              component={Link}
              to="/dashboard"
              color="inherit"
            >
              Dashboard
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
