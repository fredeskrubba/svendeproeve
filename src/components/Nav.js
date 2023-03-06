import React from 'react'
import { Link, useRoute } from 'wouter'
import navLogo from "../assets/img/nav-logo.png"
import {ReactComponent as SearchIcon} from "../assets/icons/searchIcon.svg"

// link component that tracks the current active page
const ActiveLink = props => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a className={isActive ? "active" : ""}>{props.children}</a>
    </Link>
  );
};

const Nav = () => {
  return (
    <nav>
        <div className='desktop-bar'>
          <Link href="/home">
            <section className='logo'>
              <img src={navLogo} alt="Nav-logo" />
            </section>
          </Link>
          <section className='links-container'>
            <div className='searchbar'>
              <input type="text" placeholder='INDTAST SØGEORD'/>
              <SearchIcon/>
            </div>
            <div className='links'>
              <ActiveLink href='/home'>
                  FORSIDE
              </ActiveLink>
              <ActiveLink href='/events'>
                  FORESTILLINGER & EVENTS 
              </ActiveLink>
              <ActiveLink href='/actors'>
                  SKUESPILLERE
              </ActiveLink>
              <ActiveLink href='/login'>
                  LOGIN
              </ActiveLink>
            </div>
          </section>
        </div>
    </nav>
  )
}

export default Nav