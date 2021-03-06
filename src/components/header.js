import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const Header = () => (
  <header>
    <div className="container container-topo">
      <Link to="/" className="logo">duzerocomunica</Link>
      <button class="menu-icon" type="button">
        <span class="menu-icon-box">
            <span class="menu-icon-inner"></span>
        </span>
      </button>
      <div className="menu">
        <ul>
          <li><Link to="/">quem somos</Link></li>
          <li><Link to="/">servicos</Link></li>
          <li><Link to="/">portfolio</Link></li>
          <li><Link to="/">contato</Link></li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header