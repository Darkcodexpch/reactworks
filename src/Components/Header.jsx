import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
    >
      <nav style={{ display: "flex", gap: "2rem" }}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/page1">Page one</NavLink>
        </li>
        <li>
          <NavLink to="/page2">Page two</NavLink>
        </li>
        <li>
          <NavLink to="/books">Book list</NavLink>
        </li>
      </nav>
    </header>
  );
}
