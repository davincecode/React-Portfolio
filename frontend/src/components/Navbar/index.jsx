/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { NavContainer, LeftNav, RigthNav, NavLinks } from "../../styles/GlobalStyles"
import { Link } from "react-router-dom"


const Navbar = () => {
  
  return (
    <>
      <NavContainer>
        <LeftNav>
          <Link to="/">DAVINCECODE</Link>
        </LeftNav>
        <RigthNav>
          <NavLinks>
            <Link to="/about">ABOUT</Link>
            <Link to="/recent">RECENT WORK</Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/contact">CONTACT</Link>
          </NavLinks>

        </RigthNav>
      </NavContainer>
    </>
  )
}

export default Navbar
