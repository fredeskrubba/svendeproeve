import React from 'react'
import { Link, useRoute } from 'wouter'
import navLogo from "../assets/img/nav-logo.png"
import {ReactComponent as SearchIcon} from "../assets/icons/searchIcon.svg"
import {ReactComponent as BurgerIcon} from "../assets/icons/burger-icon.svg"
import { useState, useEffect } from 'react'
import { useLoginStore } from '../stores/loginStore'
import {useLocation } from 'wouter'

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
  const [visible, setVisible] = useState("hide")
  const[loginVisible, setLoginVisible] = useState("hide")
  const login = useLoginStore((state)=> state.fetchLogin)
  const loggedIn = useLoginStore((state)=>state.loggedIn)
  const token = useLoginStore((state)=> state.token)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [location, setLocation] = useLocation("login");

  useEffect(()=>{
    if(loggedIn){
      setLocation("/mypage")
      setLoginVisible("hide")
    }
  }, [token])
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
              <p onClick={()=>{loginVisible === "hide" ? setLoginVisible("show") : setLoginVisible("hide")}}>{loggedIn ? "MIN SIDE" : "LOGIN"}</p>
            </div>
          </section>
        </div>
        <div className='mobile-bar'>
          <BurgerIcon onClick={()=>{visible === "hide" ? setVisible("show") : setVisible("hide")}}/>
          <article className={`links ${visible}`}>
            <ActiveLink href="/home">
              FORSIDE
            </ActiveLink>
            <ActiveLink href="/events">
              FORESTILLINGER & EVENTS
            </ActiveLink>
            <ActiveLink href="/actors">
              SKUESPILLERE
            </ActiveLink>
            <ActiveLink href="/login">
              LOG IN
            </ActiveLink>
          </article>
        </div>
        <div className={`login-tab ${loginVisible}`}>
                <div>
                  <input type="text" onChange={(e)=>setUsername(e.target.value)}/>
                  <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <p className='login-button' onClick={()=>{
                login("https://api.mediehuset.net/token", username, password)
                console.log(token)
                }}>Login</p>
        </div>
    </nav>
  )
}

export default Nav