import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div class="container">
    <h1>Olá</h1>
    <h2>em breve estaremos no ar</h2>
      {/*
      <div>
        <Image />
      </div>
      */}
      {/*
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      */}
    </div>

  </Layout>


)

export default IndexPage
