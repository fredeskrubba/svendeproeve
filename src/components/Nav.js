import React from 'react'
import { Link, useRoute } from 'wouter'

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
        <Link href="/home">
          <section className='logo'>
            <p>Logo</p>
          </section>
        </Link>
        <section className='links'>
          <ActiveLink href='/home'>
              Home
          </ActiveLink>
          <ActiveLink href='/about'>
              About
          </ActiveLink>
          <ActiveLink href='/contact'>
              Contact
          </ActiveLink>
        </section>
        <section>
        </section>
    </nav>
  )
}

export default Nav