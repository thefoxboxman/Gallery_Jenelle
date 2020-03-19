import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navbar = () => {
  return (
    <NavWrapper>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/flowers" className="nav-link">
              Flowers
            </Link>
          </li>

          <li>
            <Link to="/birds" className="nav-link">
              Birds
            </Link>
          </li>

          <li>
            <Link to="/awards" className="nav-link">
              Awards
            </Link>
          </li>

          <li>
            <Link to="/macro" className="nav-link">
              Macro
            </Link>
          </li>

          <li>
            <Link to="/astro" className="nav-link">
              Astro
            </Link>
          </li>

          <li>
            <Link to="/landscapes" className="nav-link">
              Scapes
            </Link>
          </li>
        </ul>
      </nav>
    </NavWrapper>
  )
}

export default Navbar
// Mobile first screen size less than 350px
//style the navbar with media query
const NavWrapper = styled.div`
  .navbar {
    padding-top: 10px;
    border-top: solid 0.1rem white;
    border-bottom: solid 0.1rem white;
  }
  ul {
    display: flex;
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  .nav-link {
    text-decoration: none;
    color: white;

    border: solid 0.1rem white;
    border-radius: 0.2rem;
    font-family: Roboto, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 0.5rem;
    padding: 0.1rem 0.3rem;
    margin: 0.2rem;
    text-transform: capitalize;
  }

  /*Mid range style the navbar with media query*/
  @media screen and (min-width: 600px) {
    .nav-link {
      font-size: 0.75rem;
      padding: 0.1rem 0.3rem;
      margin: 1rem;
    }
  }

  .nav-link:hover {
    font-size: 0.75rem;
    background: white;
    color: black;
    cursor: pointer;
  }
`
