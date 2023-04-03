import React from 'react'
import Logo from "../img/logo.png"

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <div>Made with love and <span>React.js</span>.</div>
    </footer>
  )
}

export default Footer