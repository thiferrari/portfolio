import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container home">
    <h1>Comunicação e Marketing</h1>
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
