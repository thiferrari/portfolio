import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menumobile from "./menumobile"
import "../sass/layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }`  
    )

  return (
    <>
    <div className="main">

      <Header siteTitle={data.site.siteMetadata.title} />
      <Menumobile />       
      <div className="container">
        <main>{children}</main>

      </div>
      <div className="base-links container-fluid">
        <div className="container">
          dsds
        </div>
      </div>
      <footer>
        <div className="container">
          <p>Todos os direitos reservados | duzerocomunica.com.br</p>
        </div>
      </footer>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
