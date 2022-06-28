import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [linksOpened, setLinksOpened] = useState(false)
  const linksContainerRef = useRef()
  const linksRef = useRef()

  function toggleLinks() {
    setLinksOpened(!linksOpened)
  }

  const allLinks = links.map(link => (
      <li key={link.id}>
        <a href={link.url}>{link.text}</a>
      </li>
  ))

  const allSocial = social.map(icon => (
    <li key={icon.id}>
      <a href={icon.url}>{icon.icon}</a>
    </li>
  ))

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height

    if (linksOpened) {
      linksContainerRef.current.style.height=`${linksHeight}px`
    } else {
      linksContainerRef.current.style.height='0px'
    }
  }, [linksOpened])

  return(
    <nav>

      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" className="logo"/>

          <FaBars className="nav-toggle" onClick={toggleLinks} />
        </div>

        <div className='links-container'
          ref={linksContainerRef}
        >
          <ul className="links" ref={linksRef}>
            {allLinks}
          </ul>
        </div>

        <div className="social-icons">
          <ul className="links">
            {allSocial}
          </ul>
        </div>
      </div>
    </nav>
  ) 
}

export default Navbar
