import Link from "next/link";
import React from "react";

import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div className="header-style-1">
      <div className="container">
        <div className="header-content">
          {/* <div className="logo">
            <Link href="/">
              <a>
                <img src="images/logo4.png" alt="" />
              </a>
            </Link>
          </div> */}
          <nav className="d-lg-block d-none header-b">
            <ul>
              <li>
                <Link className="active" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="contact">
            <div className="cart-search-contact">
              <Link href="/contact">
                <a className="theme-btn">Lets Talk</a>
              </Link>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
