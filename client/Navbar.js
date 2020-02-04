import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <div id="navbar" className="row">
      <NavLink to="/stories" activeClassName="active">
        Stories
      </NavLink>
      <NavLink to="/authors" activeClassName="active">
        Authors
      </NavLink>
    </div>
  );
};

export default Navbar;
