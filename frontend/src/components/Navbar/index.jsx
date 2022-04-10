/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { NavContainer, LeftNav, RigthNav, NavLinks } from "styles/GlobalStyles"
import { Link } from "react-router-dom"

const index = () => {
  return (
    <>
      <NavContainer>
        <LeftNav>
          <Link to="/">XVIEW COLLECTIVE</Link>
        </LeftNav>
        <RigthNav>
          <NavLinks>
            <Link to="/about">ABOUT</Link>
            <Link to="/latest">LATEST</Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/contact">CONTACT</Link>
          </NavLinks>
          {/* <MobileLinks>
            <a href="/about">ABOUT</a>
            <a href="/latestwork">LATEST WORK</a>
            <a href="/shop">SHOP</a>
            <a href="/contact">CONTACT</a>
          </MobileLinks> */}
        </RigthNav>
      </NavContainer>
    </>
  )
}

export default index
