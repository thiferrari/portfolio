/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Header />
      <div className="container">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      <ul class="steps">
      <li class="steps-segment">
        <a href="#" class="steps-marker"></a>
      </li>
      <li class="steps-segment">
        <a href="#" class="steps-marker"></a>
      </li>
      <li class="steps-segment is-active">
        <span class="steps-marker"></span>
      </li>
      <li class="steps-segment">
        <span class="steps-marker"></span>
      </li>
      <li class="steps-segment">
        <span class="steps-marker"></span>
      </li>
    </ul>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
