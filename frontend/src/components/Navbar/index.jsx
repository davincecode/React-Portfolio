import { useState } from "react";
import { Link } from 'react-router-dom';
import { NavContainer, LeftNav, RigthNav, NavLinks } from "styles/GlobalStyles"
import "./index.css"

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <NavContainer>
    <LeftNav>
          <Link to="/">DAVINCECODE</Link>
        </LeftNav>
      <nav>
        <section className="flex MOBILE-MENU md:hidden">
          <div
            className="space-y-2 HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="w-8 h-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            {/* Mobile */}
            <RigthNav>
            <ul className="">
              <li className="my-8 uppercase font-millerLight">
                <a href="/about">ABOUT</a>
              </li>
              <li className="my-8 uppercase font-millerLight">
                <a href="/recent">RECENT WORK</a>
              </li>
              <li className="my-8 uppercase font-millerLight">
                <a href="/shop">SHOP</a>
              </li>
              <li className="my-8 uppercase font-millerLight">
                <a href="/contact">CONTACT</a>
              </li>
              </ul>
              </RigthNav>
          </div>
        </section>

        {/* Desktop */}
        <NavLinks className="hidden DESKTOP-MENU lg:flex">
            <Link to="/about">ABOUT</Link>
            <Link to="/recent">RECENT WORK</Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/contact">CONTACT</Link>
        </NavLinks>
      </nav>
      
    </NavContainer>
  );
}
